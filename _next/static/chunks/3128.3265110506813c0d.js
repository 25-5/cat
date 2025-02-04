"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3128],{33128:function(e,t,r){r.r(t),r.d(t,{glowBlurPostProcessPixelShader:function(){return c}});var i=r(35606);let l="glowBlurPostProcessPixelShader",o=`varying vec2 vUV;uniform sampler2D textureSampler;uniform vec2 screenSize;uniform vec2 direction;uniform float blurWidth;float getLuminance(vec3 color)
{return dot(color,vec3(0.2126,0.7152,0.0722));}
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{float weights[7];weights[0]=0.05;weights[1]=0.1;weights[2]=0.2;weights[3]=0.3;weights[4]=0.2;weights[5]=0.1;weights[6]=0.05;vec2 texelSize=vec2(1.0/screenSize.x,1.0/screenSize.y);vec2 texelStep=texelSize*direction*blurWidth;vec2 start=vUV-3.0*texelStep;vec4 baseColor=vec4(0.,0.,0.,0.);vec2 texelOffset=vec2(0.,0.);for (int i=0; i<7; i++)
{vec4 texel=texture2D(textureSampler,start+texelOffset);baseColor.a+=texel.a*weights[i];float luminance=getLuminance(baseColor.rgb);float luminanceTexel=getLuminance(texel.rgb);float choice=step(luminanceTexel,luminance);baseColor.rgb=choice*baseColor.rgb+(1.0-choice)*texel.rgb;texelOffset+=texelStep;}
gl_FragColor=baseColor;}`;i.v.ShadersStore[l]=o;let c={name:l,shader:o}}}]);