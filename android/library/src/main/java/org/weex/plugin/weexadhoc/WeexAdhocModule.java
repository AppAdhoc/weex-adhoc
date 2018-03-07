package org.weex.plugin.weexadhoc;

import android.text.TextUtils;

import com.adhoc.adhocsdk.AdhocTracker;
import com.adhoc.adhocsdk.ExperimentFlags;
import com.adhoc.adhocsdk.OnAdHocReceivedData;
import com.alibaba.weex.plugin.annotation.WeexModule;
import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.bridge.JSCallback;
import com.taobao.weex.common.WXModule;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.Iterator;

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
    public void trackWithAttribute(String key, Number number, String json) {
        if (TextUtils.isEmpty(json))
            return;

        try {
            JSONObject jsonObject = new JSONObject(json);
            HashMap<String, String> hashMap = new HashMap();

            Iterator<String> iterable = jsonObject.keys();
            while (iterable.hasNext()) {
                String jsonKey = iterable.next();
                String jsonValue = jsonObject.optString(jsonKey);
                hashMap.put(jsonKey, jsonValue);
            }

            AdhocTracker.track(key, number, hashMap);
        } catch (JSONException e) {
            e.printStackTrace();
        }

    }

    @JSMethod
    public <V> void asynchronousGetFlag(final String key, final V defaultValue, int timeoutSeconds, final JSCallback callback) {
        AdhocTracker.asyncGetFlag(timeoutSeconds * 1000, new OnAdHocReceivedData() {
            @Override
            public void onReceivedData(ExperimentFlags experimentFlags) {
                callback.invokeAndKeepAlive(experimentFlags.getFlag(key, defaultValue));
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