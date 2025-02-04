"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6116],{86116:function(e,t,i){i.r(t),i.d(t,{highlightsPixelShader:function(){return n}});var r=i(35606);let c="highlightsPixelShader",a=`varying vec2 vUV;uniform sampler2D textureSampler;const vec3 RGBLuminanceCoefficients=vec3(0.2126,0.7152,0.0722);
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) 
{vec4 tex=texture2D(textureSampler,vUV);vec3 c=tex.rgb;float luma=dot(c.rgb,RGBLuminanceCoefficients);gl_FragColor=vec4(pow(c,vec3(25.0-luma*15.0)),tex.a); }`;r.v.ShadersStore[c]=a;let n={name:c,shader:a}}}]);