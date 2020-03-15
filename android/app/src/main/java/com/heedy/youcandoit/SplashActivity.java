package com.heedy.youcandoit;

import com.facebook.react.ReactActivity;
import android.content.Intent;
import android.os.Bundle;

public class SplashActivity extends ReactActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Intent intent = new Intent(this, MainActivity.class);
        startActivity(intent);
        finish();
    }
}