# coding: utf-8

Pod::Spec.new do |s|
  s.name         = "WeexAdhoc"
  s.version      = "0.0.1"
  s.summary      = "Weex Plugin"

  s.description  = <<-DESC
                   Weexplugin Source Description
                   DESC

  s.homepage     = "https://github.com"
  s.license = {
    :type => 'Copyright',
    :text => <<-LICENSE
            copyright
    LICENSE
  }
  s.authors      = {
                     "xiaoxu" =>"xiaoxu@appadhoc.com"
                   }
  s.platform     = :ios
  s.ios.deployment_target = "8.0"

  s.source       = { :git => 'https://github.com/AppAdhoc/weex-adhoc.git', :tag => '0.0.1' }
  s.source_files  = "ios/Sources/*.{h,m,mm}"
  
  s.requires_arc = true
  
  s.vendored_frameworks "WeexPluginLoader"
  s.dependency "WeexSDK"
  s.vendored_frameworks "AdhocSDK"
  s.static_framework = true
end
