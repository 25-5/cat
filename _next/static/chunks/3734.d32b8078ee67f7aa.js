"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3734],{13734:function(e,t,o){o.r(t),o.d(t,{motionBlurPixelShader:function(){return n}});var l=o(35606);let r="motionBlurPixelShader",i=`varying vec2 vUV;uniform sampler2D textureSampler;uniform float motionStrength;uniform float motionScale;uniform vec2 screenSize;
#ifdef OBJECT_BASED
uniform sampler2D velocitySampler;
#else
uniform sampler2D depthSampler;uniform mat4 inverseViewProjection;uniform mat4 prevViewProjection;uniform mat4 projection;
#endif
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{
#ifdef GEOMETRY_SUPPORTED
#ifdef OBJECT_BASED
vec2 texelSize=1.0/screenSize;vec4 velocityColor=texture2D(velocitySampler,vUV);velocityColor.rg=velocityColor.rg*2.0-vec2(1.0);vec2 velocity=vec2(pow(velocityColor.r,3.0),pow(velocityColor.g,3.0))*velocityColor.a;velocity*=motionScale*motionStrength;float speed=length(velocity/texelSize);int samplesCount=int(clamp(speed,1.0,SAMPLES));velocity=normalize(velocity)*texelSize;float hlim=float(-samplesCount)*0.5+0.5;vec4 result=texture2D(textureSampler,vUV);for (int i=1; i<int(SAMPLES); ++i)
{if (i>=samplesCount)
break;vec2 offset=vUV+velocity*(hlim+float(i));
#if defined(WEBGPU)
result+=texture2DLodEXT(textureSampler,offset,0.0);
#else
result+=texture2D(textureSampler,offset);
#endif
}
gl_FragColor=result/float(samplesCount);gl_FragColor.a=1.0;
#else
vec2 texelSize=1.0/screenSize;float depth=texture2D(depthSampler,vUV).r;depth=projection[2].z+projection[3].z/depth; 
vec4 cpos=vec4(vUV*2.0-1.0,depth,1.0);cpos=inverseViewProjection*cpos;cpos/=cpos.w;vec4 ppos=prevViewProjection*cpos;ppos/=ppos.w;ppos.xy=ppos.xy*0.5+0.5;vec2 velocity=(ppos.xy-vUV)*motionScale*motionStrength;float speed=length(velocity/texelSize);int nSamples=int(clamp(speed,1.0,SAMPLES));vec4 result=texture2D(textureSampler,vUV);for (int i=1; i<int(SAMPLES); ++i) {if (i>=nSamples)
break;vec2 offset1=vUV+velocity*(float(i)/float(nSamples-1)-0.5);
#if defined(WEBGPU)
result+=texture2DLodEXT(textureSampler,offset1,0.0);
#else
result+=texture2D(textureSampler,offset1);
#endif
}
gl_FragColor=result/float(nSamples);
#endif
#else
gl_FragColor=texture2D(textureSampler,vUV);
#endif
}
`;l.v.ShadersStore[r]=i;let n={name:r,shader:i}}}]);