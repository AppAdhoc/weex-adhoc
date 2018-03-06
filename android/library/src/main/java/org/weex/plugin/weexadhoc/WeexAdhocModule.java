package org.weex.plugin.weexadhoc;

import com.adhoc.adhocsdk.AdhocTracker;
import com.adhoc.adhocsdk.ExperimentFlags;
import com.adhoc.adhocsdk.OnAdHocReceivedData;
import com.alibaba.weex.plugin.annotation.WeexModule;
import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.bridge.JSCallback;
import com.taobao.weex.common.WXModule;

import java.util.HashMap;

@WeexModule(name = "weexAdhoc")
public class WeexAdhocModule extends WXModule {

    @JSMethod
    public <V> void getFlag(String key, V defaultValue, JSCallback callBack) {
        V value = AdhocTracker.getFlag(key, defaultValue);
        callBack.invoke(value);
    }

    @JSMethod
    public void track(String key, Number number) {
        AdhocTracker.track(key, number);
    }

    @JSMethod
    public void trackWithAttribute(String key, Number number, HashMap<String, String> map) {
        AdhocTracker.track(key, number, map);
    }

    @JSMethod
    public <V> void asynchronousGetFlag(final String key, final V defaultValue, int timeoutMillseconds, final JSCallback callback) {
        AdhocTracker.asyncGetFlag(new OnAdHocReceivedData() {
            @Override
            public void onReceivedData(ExperimentFlags experimentFlags) {
                callback.invoke(experimentFlags.getFlag(key, defaultValue));
            }
        });
    }

    @JSMethod
    public void getClientId(JSCallback callback) {
        callback.invoke(AdhocTracker.getClientId());
    }

    @JSMethod
    public void getCurrentExperiments(JSCallback callback) {
        callback.invoke(AdhocTracker.getCurrentExperiments().toString());
    }
}