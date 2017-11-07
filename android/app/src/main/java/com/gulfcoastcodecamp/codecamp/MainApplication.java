package com.gulfcoastcodecamp.codecamp;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.airbnb.android.react.maps.MapsPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.microsoft.codepush.react.CodePush;
import com.lugg.ReactNativeConfig.ReactNativeConfigPackage;
import com.microsoft.azure.mobile.react.crashes.RNCrashesPackage;
import com.microsoft.azure.mobile.react.analytics.RNAnalyticsPackage;
import com.microsoft.azure.mobile.react.mobilecenter.RNMobileCenterPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {

        @Override
        protected String getJSBundleFile() {
        return CodePush.getJSBundleFile();
        }
    
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new MapsPackage(),
            new LinearGradientPackage(),
            new CodePush(BuildConfig.CODEPUSH_KEY, MainApplication.this, BuildConfig.DEBUG),
            new ReactNativeConfigPackage(),
            new RNCrashesPackage(MainApplication.this, getResources().getString(R.string.mobileCenterCrashes_whenToSendCrashes)),
            new RNAnalyticsPackage(MainApplication.this, getResources().getString(R.string.mobileCenterAnalytics_whenToEnableAnalytics)),
            new RNMobileCenterPackage(MainApplication.this),
            new VectorIconsPackage(),
            new RNDeviceInfo()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
