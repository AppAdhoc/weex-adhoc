# coding: utf-8

Pod::Spec.new do |s|
  s.name         = "WeexAdhoc"
  s.version      = "1.0.1"
  s.summary      = "Weex Plugin"

  s.description  = <<-DESC
                   Weexplugin for link Weex and AdhocSDK.framework
                   DESC

  s.homepage     = "https://github.com/AppAdhoc/weex-adhoc"
  s.license = {
    :type => 'MIT',
    :text => <<-LICENSE
            copyright
    LICENSE
  }
  s.authors      = {
                     "xiaoxu" =>"xiaoxu@appadhoc.com"
                   }
  s.platform     = :ios
  s.ios.deployment_target = "8.0"

  s.source       = { :git => 'https://github.com/AppAdhoc/weex-adhoc.git', :tag => '1.0.1' }
  s.source_files  = "ios/Sources/*.{h,m,mm}"
  
  s.requires_arc = true
  
  s.dependency "WeexPluginLoader"
  s.dependency "WeexSDK"
  s.dependency "AdhocSDK"
end