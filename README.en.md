[![Tencent ThinkPHP Serverless Component](https://img.serverlesscloud.cn/2020310/1583829094880-thinkPHP_%E9%95%BF.png)](http://serverless.com)

# Tencent ThinkPHP Serverless Component

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

```bash
$ composer create-project topthink/think serverless-thinkphp
```

> Notice：ThinkPHP use Composer manage dependencies, so you should install Composer firstly. Refer to [Official Install](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-macos)

### 1. Install

Install the Serverless Framework globally:

```bash
$ npm install -g serverless
```

### 2. Create

Just create the following simple boilerplate:

```bash
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
org: orgDemo
app: appDemo
stage: dev
component: thinkphp
name: thinkphpDemo

inputs:
  src:
    src: ./
    exclude:
      - .env
  region: ap-guangzhou
  runtime: Php7
  apigatewayConf:
    protocols:
      - http
      - https
    environment: release
```

- [More Options](https://github.com/serverless-components/tencent-thinkphp/tree/master/docs/configure.md)

### 4. Deploy

> Notice: **Before deploying, you should clear local run config cache, run `php think clear`.**

```bash
$ serverless deploy --debug
```

### 5. Remove

```bash
$ serverless remove --debug
```

### More Components

Checkout the [Serverless Components](https://github.com/serverless/components) repo for more information.
