"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8956],{8956:function(e,r,l){l.r(r),l.d(r,{blackAndWhitePixelShader:function(){return t}});var n=l(35606);let c="blackAndWhitePixelShader",a=`varying vec2 vUV;uniform sampler2D textureSampler;uniform float degree;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) 
{vec3 color=texture2D(textureSampler,vUV).rgb;float luminance=dot(color,vec3(0.3,0.59,0.11)); 
vec3 blackAndWhite=vec3(luminance,luminance,luminance);gl_FragColor=vec4(color-((color-blackAndWhite)*degree),1.0);}`;n.v.ShadersStore[c]=a;let t={name:c,shader:a}}}]);