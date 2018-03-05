# coding: utf-8

Pod::Spec.new do |s|
  s.name         = "WeexAdhoc"
  s.version      = "0.0.2"
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

  s.source       = { :git => 'https://github.com/AppAdhoc/weex-adhoc.git', :tag => '0.0.2' }
  s.source_files  = "ios/Sources/*.{h,m,mm}"
  
  s.requires_arc = true
  
  s.dependency "WeexPluginLoader"
  s.dependency "WeexSDK"
  s.dependency "AdhocSDK"
  s.static_framework = true
end