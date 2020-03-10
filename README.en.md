[![Tencent ThinkPHP Serverless Component](https://img.serverlesscloud.cn/2020310/1583829094880-thinkPHP_%E9%95%BF.png)](http://serverless.com)

# Tencent ThinkPHP Serverless Component

[![npm](https://img.shields.io/npm/v/%40serverless%2Ftencent-thinkphp)](http://www.npmtrends.com/%40serverless%2Ftencent-thinkphp)
[![NPM downloads](http://img.shields.io/npm/dm/%40serverless%2Ftencent-thinkphp.svg?style=flat-square)](http://www.npmtrends.com/%40serverless%2Ftencent-thinkphp)

[简体中文](https://github.com/serverless-components/tencent-thinkphp/blob/master/README.md) | English

## Introduction

[ThinkPHP](https://github.com/top-think/think) Serverless Component for Tencent Cloud.

## Content

1. [Prepare](#0-prepare)
1. [Install](#1-install)
1. [Create](#2-create)
1. [Configure](#3-configure)
1. [Deploy](#4-deploy)
1. [Remove](#5-Remove)

### 0. Prepare

#### Initial ThinkPHP Project

Before use this component, you should init a `ThinkPHP` project:

```shell
$ composer create-project topthink/think serverless-thinkphp
```

> Notice：ThinkPHP use Composer manage dependencies, so you should install Composer firstly. Refer to [Official Install](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-macos)

### 1. Install

Install the Serverless Framework globally:

```shell
$ npm install -g serverless
```

### 2. Create

Just create the following simple boilerplate:

```shell
$ touch serverless.yml
$ touch .env           # your Tencent api keys
```

Add the access keys of a [Tencent CAM Role](https://console.cloud.tencent.com/cam/capi) with `AdministratorAccess` in the `.env` file, using this format:

```
# .env
TENCENT_SECRET_ID=XXX
TENCENT_SECRET_KEY=XXX
```

- If you don't have a Tencent Cloud account, you could [sign up](https://intl.cloud.tencent.com/register) first.

### 3. Configure

```yml
# serverless.yml

MyThinkPHP:
  component: '@serverless/tencent-thinkphp'
  inputs:
    region: ap-guangzhou
    functionName: thinkphp-function
    code: ./
    functionConf:
      timeout: 10
      memorySize: 128
      environment:
        variables:
          TEST: abc
      vpcConfig:
        subnetId: ''
        vpcId: ''
    apigatewayConf:
      protocols:
        - https
      environment: release
```

- [More Options](https://github.com/serverless-components/tencent-thinkphp/tree/master/docs/configure.md)

### 4. Deploy

> Notice: **Before deploying, you should clear local run config cache, run `php artisan config:clear`.**

```shell
$ sls --debug

  DEBUG ─ Resolving the template's static variables.
  DEBUG ─ Collecting components from the template.
  DEBUG ─ Downloading any NPM components found in the template.
  DEBUG ─ Analyzing the template's components dependencies.
  DEBUG ─ Creating the template's components graph.
  DEBUG ─ Syncing template state.
  DEBUG ─ Executing the template's components graph.
  DEBUG ─ Compressing function thinkphp-function file to /Users/yugasun/Desktop/Develop/serverless/tencent-thinkphp/example/.serverless/thinkphp-function.zip.
  DEBUG ─ Compressed function thinkphp-function file successful
  DEBUG ─ Uploading service package to cos[sls-cloudfunction-ap-guangzhou-code]. sls-cloudfunction-default-thinkphp-function-1583729311.zip
  DEBUG ─ Uploaded package successful /Users/yugasun/Desktop/Develop/serverless/tencent-thinkphp/example/.serverless/thinkphp-function.zip
  DEBUG ─ Creating function thinkphp-function

  DEBUG ─ Created function thinkphp-function successful
  DEBUG ─ Setting tags for function thinkphp-function
  DEBUG ─ Creating trigger for function thinkphp-function
  DEBUG ─ Deployed function thinkphp-function successful
  DEBUG ─ Starting API-Gateway deployment with name MyThinkPHP.TencentApiGateway in the ap-guangzhou region
  DEBUG ─ Service with ID service-jgey4hi8 created.
  DEBUG ─ API with id api-jeilvfr6 created.
  DEBUG ─ Deploying service with id service-jgey4hi8.
  DEBUG ─ Deployment successful for the api named MyThinkPHP.TencentApiGateway in the ap-guangzhou region.

  MyThinkPHP:
    region:              ap-guangzhou
    functionName:        thinkphp-function
    apiGatewayServiceId: service-jgey4hi8
    url:                 https://service-jgey4hi8-1251556596.gz.apigw.tencentcs.com/release/

  22s › MyThinkPHP › done
```

> Notice: `sls` is short for `serverless` command.

&nbsp;

### 5. Remove

```shell
$ sls remove --debug

  DEBUG ─ Flushing template state and removing all components.
  DEBUG ─ Removing function
  DEBUG ─ Request id
  DEBUG ─ Removed function thinkphp-function successful
  DEBUG ─ Removing any previously deployed API. api-jeilvfr6
  DEBUG ─ Removing any previously deployed service. service-jgey4hi8

  8s › MyThinkPHP › done
```

### More Components

Checkout the [Serverless Components](https://github.com/serverless/components) repo for more information.
