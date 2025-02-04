"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2337],{72337:function(e,r,o){o.r(r),o.d(r,{layerPixelShader:function(){return n}});var a=o(35606);o(54037);let i="layerPixelShader",l=`varying vec2 vUV;uniform sampler2D textureSampler;uniform vec4 color;
#include<helperFunctions>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
vec4 baseColor=texture2D(textureSampler,vUV);
#if defined(CONVERT_TO_GAMMA)
baseColor.rgb=toGammaSpace(baseColor.rgb);
#elif defined(CONVERT_TO_LINEAR)
baseColor.rgb=toLinearSpace(baseColor.rgb);
#endif
#ifdef ALPHATEST
if (baseColor.a<0.4)
discard;
#endif
gl_FragColor=baseColor*color;
#define CUSTOM_FRAGMENT_MAIN_END
}`;a.v.ShadersStore[i]=l;let n={name:i,shader:l}}}]);