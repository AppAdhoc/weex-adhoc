package org.weex.plugin.weexadhoc;

import com.adhoc.adhocsdk.AdhocTracker;
import com.adhoc.adhocsdk.ExperimentFlags;
import com.adhoc.adhocsdk.OnAdHocReceivedData;
import com.alibaba.weex.plugin.annotation.WeexModule;
import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.bridge.JSCallback;
import com.taobao.weex.common.WXModule;

@WeexModule(name = "weexAdhoc")
public class WeexAdhocModule extends WXModule {

    //sync ret example
    //TODO: Auto-generated method example
    @JSMethod
    public String syncRet(String param) {
        return param;
    }

    //async ret example
    //TODO: Auto-generated method example
    @JSMethod
    public void asyncRet(String param, JSCallback callback) {
        callback.invoke(param);
    }

    @JSMethod
    public <V> void adhoc_getFlag(String key, V defaultValue, JSCallback callBack) {
        V value = AdhocTracker.getFlag(key, defaultValue);
        callBack.invoke(value);
    }

    @JSMethod
    public void adhoc_track(String key, Number number) {
        AdhocTracker.track(key, number);
    }

    @JSMethod
    public <V> void asyncGetFlag(final String key, final V defaultValue, final JSCallback callback) {
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