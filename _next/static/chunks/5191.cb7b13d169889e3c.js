"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5191],{75191:function(e,r,o){o.r(r),o.d(r,{copyTexture3DLayerToTexturePixelShader:function(){return l}});var t=o(35606);let c="copyTexture3DLayerToTexturePixelShader",a=`precision highp sampler3D;uniform sampler3D textureSampler;uniform int layerNum;varying vec2 vUV;void main(void) {vec3 coord=vec3(0.0,0.0,float(layerNum));coord.xy=vec2(vUV.x,vUV.y)*vec2(textureSize(textureSampler,0).xy);vec3 color=texelFetch(textureSampler,ivec3(coord),0).rgb;gl_FragColor=vec4(color,1);}
`;t.v.ShadersStore[c]=a;let l={name:c,shader:a}}}]);