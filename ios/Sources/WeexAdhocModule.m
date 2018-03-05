//
//  WeexAdhocModule.m
//  WeexPluginTemp
//
//  Created by xiaoxu on 17/3/14.
//  Copyright © 2017年 AppAdhoc. All rights reserved.
//

#import "WeexAdhocModule.h"
#import <WeexPluginLoader/WeexPluginLoader.h>
#import <AdhocSDK/AdhocSDK.h>
@implementation WeexAdhocModule

WX_PlUGIN_EXPORT_MODULE(weexAdhoc, WeexAdhocModule)
WX_EXPORT_METHOD(@selector(getFlag:default:callback:))
WX_EXPORT_METHOD(@selector(asynchronousGetFlag:default:timeoutInterval:callback:))
WX_EXPORT_METHOD(@selector(track:value:))
WX_EXPORT_METHOD(@selector(trackWithAttribute:value:attribute:))
WX_EXPORT_METHOD(@selector(getCurrentExperiments:))
/**
 *  获取后台设置的指定的实验变量的值，实验变量的名字注意与后台保持一致
 *  该方法从SDK缓存中直接读取，如需同步获取flag值，请使用下面的接口
 *
 *  @param flag_name     adhoc后台设置的实验变量名字
 *  @param default_value 指定实验变量的默认值
 *
 *  @param callback 根据后台设置的模块的类型，返回的Obj-C中对应的类型可能为(NSNumber, NSString)
 */
- (void)getFlag:(NSString *)flag_name default:(id)default_value callback:(WXModuleKeepAliveCallback)callback
{
    callback([AdhocSDK getFlag:flag_name default:default_value],YES);
}

/**
 *  异步方式从服务器直接获取实验变量的值
 *
 *  @param flag_name     adhoc后台设置的实验变量名字
 *  @param default_value 指定实验变量的默认值
 *  @param timeout       设置此次网络请求的超时时间
 *  @param callback       网络执行结束后的相关操作
 */
- (void)asynchronousGetFlag:(NSString *)flag_name default:(id)default_value timeoutInterval:(NSInteger)timeout callback:(WXModuleKeepAliveCallback)callback
{
    [AdhocSDK asynchronousGetFlag:flag_name defaultValue:default_value timeoutInterval:timeout completionHandler:^(id flag_value, NSError *error) {
        callback(flag_value,YES);
    }];
}

/**
 统计需要的优化指标，用以实现科学有效的测试
 
 @param stat_name 后台设置的优化指标，名字须保持一致
 @param stat_value 当前优化指标单次统计的权重
 */
- (void)track:(NSString *)stat_name value:(NSString *)stat_value
{
    [AdhocSDK track:stat_name value:@([stat_value integerValue])];
}

/**
 统计需要的优化指标，用以实现科学有效的测试
 
 @param stat_name 后台设置的优化指标，名字须保持一致
 @param stat_value 当前优化指标单次统计的权重
 @param stat_attribute 当前数据的定向条件
 */
- (void)trackWithAttribute:(NSString *)stat_name value:(NSNumber *)stat_value attribute:(NSString *)stat_attribute
{
    NSData *JSONData = [stat_attribute dataUsingEncoding:NSUTF8StringEncoding];
    NSDictionary *responseJSON = [NSJSONSerialization JSONObjectWithData:JSONData options:NSJSONReadingMutableLeaves error:nil];
    [AdhocSDK track:stat_name value:stat_value attribute:responseJSON];
}

/**
 *  获取当前设备所在实验的实验名列表
 *
 *  @param callback 实验名数组
 */
- (void)getCurrentExperiments:(WXModuleKeepAliveCallback)callback
{
    callback([AdhocSDK getCurrentExperiments],YES);
}

@end
