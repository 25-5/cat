"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3655],{93655:function(e,i,r){r.r(i),r.d(i,{iblScaledLuminancePixelShader:function(){return l}});var o=r(35606);r(54037);let n="iblScaledLuminancePixelShader",c=`precision highp sampler2D;precision highp samplerCube;
#include<helperFunctions>
varying vec2 vUV;
#ifdef IBL_USE_CUBE_MAP
uniform samplerCube iblSource;
#else
uniform sampler2D iblSource;
#endif
uniform int iblWidth;uniform int iblHeight;float fetchLuminance(vec2 coords) {
#ifdef IBL_USE_CUBE_MAP
vec3 direction=equirectangularToCubemapDirection(coords);vec3 color=textureCubeLodEXT(iblSource,direction,0.0).rgb;
#else
vec3 color=textureLod(iblSource,coords,0.0).rgb;
#endif
return dot(color,LuminanceEncodeApprox);}
void main(void) {float deform=sin(vUV.y*PI);float luminance=fetchLuminance(vUV);gl_FragColor=vec4(vec3(deform*luminance),1.0);}`;o.v.ShadersStore[n]=c;let l={name:n,shader:c}}}]);