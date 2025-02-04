"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7301],{67301:function(e,r,t){t.r(r),t.d(r,{depthBoxBlurPixelShader:function(){return n}});var o=t(35606);let l="depthBoxBlurPixelShader",i=`varying vec2 vUV;uniform sampler2D textureSampler;uniform vec2 screenSize;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{vec4 colorDepth=vec4(0.0);for (int x=-OFFSET; x<=OFFSET; x++)
for (int y=-OFFSET; y<=OFFSET; y++)
colorDepth+=texture2D(textureSampler,vUV+vec2(x,y)/screenSize);gl_FragColor=(colorDepth/float((OFFSET*2+1)*(OFFSET*2+1)));}`;o.v.ShadersStore[l]=i;let n={name:l,shader:i}}}]);