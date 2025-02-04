"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3663],{63663:function(e,a,o){o.r(a),o.d(a,{glowMapMergePixelShader:function(){return s}});var r=o(35606);let l="glowMapMergePixelShader",f=`varying vec2 vUV;uniform sampler2D textureSampler;
#ifdef EMISSIVE
uniform sampler2D textureSampler2;
#endif
uniform float offset;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
vec4 baseColor=texture2D(textureSampler,vUV);
#ifdef EMISSIVE
baseColor+=texture2D(textureSampler2,vUV);baseColor*=offset;
#else
baseColor.a=abs(offset-baseColor.a);
#ifdef STROKE
float alpha=smoothstep(.0,.1,baseColor.a);baseColor.a=alpha;baseColor.rgb=baseColor.rgb*alpha;
#endif
#endif
#if LDR
baseColor=clamp(baseColor,0.,1.0);
#endif
gl_FragColor=baseColor;
#define CUSTOM_FRAGMENT_MAIN_END
}`;r.v.ShadersStore[l]=f;let s={name:l,shader:f}}}]);