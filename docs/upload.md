## 文件上传说明

项目中如果涉及到文件上传，需要依赖 API 网关提供的 [Base64 编码能力](https://cloud.tencent.com/document/product/628/51799)，使用时只需要 `serverless.yml` 中配置 `isBase64Encoded` 为 `true`，如下：

```yaml
app: appDemo
stage: dev
component: thinkphp
name: thinkphpDemo

inputs:
  # 省略...
  apigatewayConf:
    isBase64Encoded: true
    # 省略...
  # 省略...
```

当前 API 网关支持上传最大文件大小为 `2M`，如果文件过大，请修改为前端直传对象存储方案。

## Base64 示例

此 Github 项目的 `example` 目录下 `app/controller/index.php` 文件中有 `POST /upload` 接口的处理方法如下：

```php
// 上传文件接口
public function upload(Request $request) {
  $avatar = $request->file('avatar');
  if ($avatar) {
    $savename = \think\facade\Filesystem::putFile('avatar', $avatar);
  }

  return json([
    "title" => 'serverless',
    "upload" => $savename ?? null
  ]);
}
```
