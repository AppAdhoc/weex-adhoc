# weex-adhoc
weex-adhoc是一个weex插件，可以通过weexpack快速集成，可以丰富weex功能

支持的WeexSDK版本： >= 0.16.0

# 功能

# 快速使用
- 通过weexpack初始化一个测试工程 weextest
   ```
   weex create weextest
   ```
- 添加ios平台
  ```
  weex platform add ios
  ```
- 添加android平台
  ```
  weex platform add android
  ```
- 添加插件
  ```
  weex plugin add weex-adhoc
  ```  

# 项目地址
[github](https://github.com/AppAdhoc/weex-adhoc)

# 已有工程集成
## iOS集成插件WeexAdhoc
- 命令行集成
  ```
  weex plugin add weex-adhoc
  ```
- 手动集成
  在podfile 中添加
  ```
  pod 'WeexAdhoc'
  ```

## 安卓集成插件weexadhoc
1.添加 Android 原生 SDK 依赖
  AppAdhoc提供两种SDK包，其中精简包仅支持编程试验，标准包支持编程和可视化试验。
  通过在工程build.gradle配置脚本中添加maven线上依赖，导入最新版本SDK。在Gradle依赖中添加：

  ```
  //标准包
  dependencies {
    implementation 'com.appadhoc:abtest:5.1.2'
  }
  ```
2.添加 SDK
* 命令行集成
  ```
  weexpack plugin add weex-adhoc
  ```
* 手动集成
  在相应工程的build.gradle文件的dependencies中添加
  ```
  compile 'com.adhoc.weex:library:5.0.3'
  ```

## 浏览器端集成 weex-adhoc
- 命令行集成
  ```
  npm install  weex-adhoc
  ```
- 手动集成
  在相应工程的package.json文件的dependencies中添加
  ```
  weex-adhoc:{$version}'
  ```   

## API

[iOS API](documents/ios_api.md)

[Android API](documents/android_api.md)
