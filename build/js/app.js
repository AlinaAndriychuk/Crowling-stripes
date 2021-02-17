/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/three/build/three.module.js":
/*!**************************************************************************!*\
  !*** D:/Sites/Crowling-stripes/node_modules/three/build/three.module.js ***!
  \**************************************************************************/
/*! exports provided: ACESFilmicToneMapping, AddEquation, AddOperation, AdditiveAnimationBlendMode, AdditiveBlending, AlphaFormat, AlwaysDepth, AlwaysStencilFunc, AmbientLight, AmbientLightProbe, AnimationClip, AnimationLoader, AnimationMixer, AnimationObjectGroup, AnimationUtils, ArcCurve, ArrayCamera, ArrowHelper, Audio, AudioAnalyser, AudioContext, AudioListener, AudioLoader, AxesHelper, AxisHelper, BackSide, BasicDepthPacking, BasicShadowMap, BinaryTextureLoader, Bone, BooleanKeyframeTrack, BoundingBoxHelper, Box2, Box3, Box3Helper, BoxBufferGeometry, BoxGeometry, BoxHelper, BufferAttribute, BufferGeometry, BufferGeometryLoader, ByteType, Cache, Camera, CameraHelper, CanvasRenderer, CanvasTexture, CatmullRomCurve3, CineonToneMapping, CircleBufferGeometry, CircleGeometry, ClampToEdgeWrapping, Clock, ClosedSplineCurve3, Color, ColorKeyframeTrack, CompressedTexture, CompressedTextureLoader, ConeBufferGeometry, ConeGeometry, CubeCamera, CubeReflectionMapping, CubeRefractionMapping, CubeTexture, CubeTextureLoader, CubeUVReflectionMapping, CubeUVRefractionMapping, CubicBezierCurve, CubicBezierCurve3, CubicInterpolant, CullFaceBack, CullFaceFront, CullFaceFrontBack, CullFaceNone, Curve, CurvePath, CustomBlending, CustomToneMapping, CylinderBufferGeometry, CylinderGeometry, Cylindrical, DataTexture, DataTexture2DArray, DataTexture3D, DataTextureLoader, DataUtils, DecrementStencilOp, DecrementWrapStencilOp, DefaultLoadingManager, DepthFormat, DepthStencilFormat, DepthTexture, DirectionalLight, DirectionalLightHelper, DiscreteInterpolant, DodecahedronBufferGeometry, DodecahedronGeometry, DoubleSide, DstAlphaFactor, DstColorFactor, DynamicBufferAttribute, DynamicCopyUsage, DynamicDrawUsage, DynamicReadUsage, EdgesGeometry, EdgesHelper, EllipseCurve, EqualDepth, EqualStencilFunc, EquirectangularReflectionMapping, EquirectangularRefractionMapping, Euler, EventDispatcher, ExtrudeBufferGeometry, ExtrudeGeometry, Face3, Face4, FaceColors, FileLoader, FlatShading, Float16BufferAttribute, Float32Attribute, Float32BufferAttribute, Float64Attribute, Float64BufferAttribute, FloatType, Fog, FogExp2, Font, FontLoader, FrontSide, Frustum, GLBufferAttribute, GLSL1, GLSL3, GammaEncoding, GeometryUtils, GreaterDepth, GreaterEqualDepth, GreaterEqualStencilFunc, GreaterStencilFunc, GridHelper, Group, HalfFloatType, HemisphereLight, HemisphereLightHelper, HemisphereLightProbe, IcosahedronBufferGeometry, IcosahedronGeometry, ImageBitmapLoader, ImageLoader, ImageUtils, ImmediateRenderObject, IncrementStencilOp, IncrementWrapStencilOp, InstancedBufferAttribute, InstancedBufferGeometry, InstancedInterleavedBuffer, InstancedMesh, Int16Attribute, Int16BufferAttribute, Int32Attribute, Int32BufferAttribute, Int8Attribute, Int8BufferAttribute, IntType, InterleavedBuffer, InterleavedBufferAttribute, Interpolant, InterpolateDiscrete, InterpolateLinear, InterpolateSmooth, InvertStencilOp, JSONLoader, KeepStencilOp, KeyframeTrack, LOD, LatheBufferGeometry, LatheGeometry, Layers, LensFlare, LessDepth, LessEqualDepth, LessEqualStencilFunc, LessStencilFunc, Light, LightProbe, Line, Line3, LineBasicMaterial, LineCurve, LineCurve3, LineDashedMaterial, LineLoop, LinePieces, LineSegments, LineStrip, LinearEncoding, LinearFilter, LinearInterpolant, LinearMipMapLinearFilter, LinearMipMapNearestFilter, LinearMipmapLinearFilter, LinearMipmapNearestFilter, LinearToneMapping, Loader, LoaderUtils, LoadingManager, LogLuvEncoding, LoopOnce, LoopPingPong, LoopRepeat, LuminanceAlphaFormat, LuminanceFormat, MOUSE, Material, MaterialLoader, Math, MathUtils, Matrix3, Matrix4, MaxEquation, Mesh, MeshBasicMaterial, MeshDepthMaterial, MeshDistanceMaterial, MeshFaceMaterial, MeshLambertMaterial, MeshMatcapMaterial, MeshNormalMaterial, MeshPhongMaterial, MeshPhysicalMaterial, MeshStandardMaterial, MeshToonMaterial, MinEquation, MirroredRepeatWrapping, MixOperation, MultiMaterial, MultiplyBlending, MultiplyOperation, NearestFilter, NearestMipMapLinearFilter, NearestMipMapNearestFilter, NearestMipmapLinearFilter, NearestMipmapNearestFilter, NeverDepth, NeverStencilFunc, NoBlending, NoColors, NoToneMapping, NormalAnimationBlendMode, NormalBlending, NotEqualDepth, NotEqualStencilFunc, NumberKeyframeTrack, Object3D, ObjectLoader, ObjectSpaceNormalMap, OctahedronBufferGeometry, OctahedronGeometry, OneFactor, OneMinusDstAlphaFactor, OneMinusDstColorFactor, OneMinusSrcAlphaFactor, OneMinusSrcColorFactor, OrthographicCamera, PCFShadowMap, PCFSoftShadowMap, PMREMGenerator, ParametricBufferGeometry, ParametricGeometry, Particle, ParticleBasicMaterial, ParticleSystem, ParticleSystemMaterial, Path, PerspectiveCamera, Plane, PlaneBufferGeometry, PlaneGeometry, PlaneHelper, PointCloud, PointCloudMaterial, PointLight, PointLightHelper, Points, PointsMaterial, PolarGridHelper, PolyhedronBufferGeometry, PolyhedronGeometry, PositionalAudio, PropertyBinding, PropertyMixer, QuadraticBezierCurve, QuadraticBezierCurve3, Quaternion, QuaternionKeyframeTrack, QuaternionLinearInterpolant, REVISION, RGBADepthPacking, RGBAFormat, RGBAIntegerFormat, RGBA_ASTC_10x10_Format, RGBA_ASTC_10x5_Format, RGBA_ASTC_10x6_Format, RGBA_ASTC_10x8_Format, RGBA_ASTC_12x10_Format, RGBA_ASTC_12x12_Format, RGBA_ASTC_4x4_Format, RGBA_ASTC_5x4_Format, RGBA_ASTC_5x5_Format, RGBA_ASTC_6x5_Format, RGBA_ASTC_6x6_Format, RGBA_ASTC_8x5_Format, RGBA_ASTC_8x6_Format, RGBA_ASTC_8x8_Format, RGBA_BPTC_Format, RGBA_ETC2_EAC_Format, RGBA_PVRTC_2BPPV1_Format, RGBA_PVRTC_4BPPV1_Format, RGBA_S3TC_DXT1_Format, RGBA_S3TC_DXT3_Format, RGBA_S3TC_DXT5_Format, RGBDEncoding, RGBEEncoding, RGBEFormat, RGBFormat, RGBIntegerFormat, RGBM16Encoding, RGBM7Encoding, RGB_ETC1_Format, RGB_ETC2_Format, RGB_PVRTC_2BPPV1_Format, RGB_PVRTC_4BPPV1_Format, RGB_S3TC_DXT1_Format, RGFormat, RGIntegerFormat, RawShaderMaterial, Ray, Raycaster, RectAreaLight, RedFormat, RedIntegerFormat, ReinhardToneMapping, RepeatWrapping, ReplaceStencilOp, ReverseSubtractEquation, RingBufferGeometry, RingGeometry, SRGB8_ALPHA8_ASTC_10x10_Format, SRGB8_ALPHA8_ASTC_10x5_Format, SRGB8_ALPHA8_ASTC_10x6_Format, SRGB8_ALPHA8_ASTC_10x8_Format, SRGB8_ALPHA8_ASTC_12x10_Format, SRGB8_ALPHA8_ASTC_12x12_Format, SRGB8_ALPHA8_ASTC_4x4_Format, SRGB8_ALPHA8_ASTC_5x4_Format, SRGB8_ALPHA8_ASTC_5x5_Format, SRGB8_ALPHA8_ASTC_6x5_Format, SRGB8_ALPHA8_ASTC_6x6_Format, SRGB8_ALPHA8_ASTC_8x5_Format, SRGB8_ALPHA8_ASTC_8x6_Format, SRGB8_ALPHA8_ASTC_8x8_Format, Scene, SceneUtils, ShaderChunk, ShaderLib, ShaderMaterial, ShadowMaterial, Shape, ShapeBufferGeometry, ShapeGeometry, ShapePath, ShapeUtils, ShortType, Skeleton, SkeletonHelper, SkinnedMesh, SmoothShading, Sphere, SphereBufferGeometry, SphereGeometry, Spherical, SphericalHarmonics3, Spline, SplineCurve, SplineCurve3, SpotLight, SpotLightHelper, Sprite, SpriteMaterial, SrcAlphaFactor, SrcAlphaSaturateFactor, SrcColorFactor, StaticCopyUsage, StaticDrawUsage, StaticReadUsage, StereoCamera, StreamCopyUsage, StreamDrawUsage, StreamReadUsage, StringKeyframeTrack, SubtractEquation, SubtractiveBlending, TOUCH, TangentSpaceNormalMap, TetrahedronBufferGeometry, TetrahedronGeometry, TextBufferGeometry, TextGeometry, Texture, TextureLoader, TorusBufferGeometry, TorusGeometry, TorusKnotBufferGeometry, TorusKnotGeometry, Triangle, TriangleFanDrawMode, TriangleStripDrawMode, TrianglesDrawMode, TubeBufferGeometry, TubeGeometry, UVMapping, Uint16Attribute, Uint16BufferAttribute, Uint32Attribute, Uint32BufferAttribute, Uint8Attribute, Uint8BufferAttribute, Uint8ClampedAttribute, Uint8ClampedBufferAttribute, Uniform, UniformsLib, UniformsUtils, UnsignedByteType, UnsignedInt248Type, UnsignedIntType, UnsignedShort4444Type, UnsignedShort5551Type, UnsignedShort565Type, UnsignedShortType, VSMShadowMap, Vector2, Vector3, Vector4, VectorKeyframeTrack, Vertex, VertexColors, VideoTexture, WebGL1Renderer, WebGLCubeRenderTarget, WebGLMultisampleRenderTarget, WebGLRenderTarget, WebGLRenderTargetCube, WebGLRenderer, WebGLUtils, WireframeGeometry, WireframeHelper, WrapAroundEnding, XHRLoader, ZeroCurvatureEnding, ZeroFactor, ZeroSlopeEnding, ZeroStencilOp, sRGBEncoding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/***/ }),

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _three = __webpack_require__(/*! three */ \"../../node_modules/three/build/three.module.js\");\n\nvar THREE = _interopRequireWildcard(_three);\n\nvar _sayHello = __webpack_require__(/*! ./lib/sayHello */ \"./lib/sayHello.js\");\n\nvar _sayHello2 = _interopRequireDefault(_sayHello);\n\nvar _fragment = __webpack_require__(/*! ./shader/fragment.glsl */ \"./shader/fragment.glsl\");\n\nvar _fragment2 = _interopRequireDefault(_fragment);\n\nvar _vertex = __webpack_require__(/*! ./shader/vertex.glsl */ \"./shader/vertex.glsl\");\n\nvar _vertex2 = _interopRequireDefault(_vertex);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Sketch = function () {\n\tfunction Sketch(container) {\n\t\t_classCallCheck(this, Sketch);\n\n\t\tthis.container = container;\n\n\t\tvar frustumSize = 10;\n\t\tvar aspect = window.innerWidth / window.innerHeight;\n\t\tthis.camera = new THREE.OrthographicCamera(frustumSize * aspect / -2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / -2, -1000, 1000);\n\t\t// this.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.01, 1000);\n\t\tthis.camera.position.set(0, 7, 10);\n\t\tthis.camera.lookAt(new THREE.Vector3());\n\t\tthis.camera.rotateZ(130);\n\n\t\tthis.scene = new THREE.Scene();\n\n\t\tthis.renderer = new THREE.WebGLRenderer({ antialias: true });\n\t\tthis.renderer.setSize(window.innerWidth, window.innerHeight);\n\t\tthis.renderer.setAnimationLoop(this.animation.bind(this));\n\n\t\tthis.time = 0;\n\n\t\tthis.colors = [new THREE.Color(0xfdf3d0), new THREE.Color(0xfeb7a5), new THREE.Color(0xf7aab0), new THREE.Color(0xd27c87), new THREE.Color(0xae697c)];\n\n\t\tthis.init();\n\t}\n\n\t_createClass(Sketch, [{\n\t\tkey: 'init',\n\t\tvalue: function init() {\n\t\t\tthis.geometry = new THREE.CylinderGeometry(2, 2, 1, 4, 1, true);\n\n\t\t\tthis.material = new THREE.ShaderMaterial({\n\t\t\t\tside: THREE.DoubleSide,\n\t\t\t\tuniforms: {\n\t\t\t\t\ttime: { type: 'f', value: this.time },\n\t\t\t\t\toffset: { type: 'f', value: 0 },\n\t\t\t\t\tcolor: { type: 'c', value: 0 }\n\t\t\t\t},\n\t\t\t\tfragmentShader: _fragment2.default,\n\t\t\t\tvertexShader: _vertex2.default\n\t\t\t});\n\n\t\t\tvar numberOfCylinders = 10;\n\t\t\tthis.materials = [];\n\n\t\t\tfor (var i = 0; i < numberOfCylinders; i++) {\n\t\t\t\tvar newMaterial = this.material.clone();\n\t\t\t\tnewMaterial.uniforms.offset.value = i;\n\t\t\t\tnewMaterial.uniforms.color.value = this.colors[i % 5];\n\n\t\t\t\tthis.materials.push(newMaterial);\n\n\t\t\t\tvar mesh = new THREE.Mesh(this.geometry, newMaterial);\n\t\t\t\tmesh.position.y = i - 5;\n\n\t\t\t\tthis.scene.add(mesh);\n\t\t\t}\n\n\t\t\tthis.container.appendChild(this.renderer.domElement);\n\t\t\twindow.addEventListener('resize', this.resize.bind(this));\n\t\t}\n\t}, {\n\t\tkey: 'animation',\n\t\tvalue: function animation() {\n\t\t\tvar _this = this;\n\n\t\t\tthis.time += 0.005;\n\n\t\t\t/* eslint-disable no-param-reassign */\n\t\t\tthis.materials.forEach(function (mat) {\n\t\t\t\tmat.uniforms.time.value = _this.time;\n\t\t\t});\n\t\t\tthis.renderer.render(this.scene, this.camera);\n\t\t}\n\t}, {\n\t\tkey: 'resize',\n\t\tvalue: function resize() {\n\t\t\tvar width = window.innerWidth;\n\t\t\tvar height = window.innerHeight;\n\t\t\tthis.renderer.setSize(width, height);\n\t\t\tthis.camera.aspect = width / height;\n\t\t\tthis.camera.updateProjectionMatrix();\n\t\t}\n\t}]);\n\n\treturn Sketch;\n}();\n\nvar container = document.querySelector('.container');\nvar sketch = new Sketch(container);\n\n(0, _sayHello2.default)();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2FwcC5qcz8wMzU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCBzYXlIZWxsbyBmcm9tICcuL2xpYi9zYXlIZWxsbyc7XG5pbXBvcnQgZnJhZ21lbnQgZnJvbSAnLi9zaGFkZXIvZnJhZ21lbnQuZ2xzbCc7XG5pbXBvcnQgdmVydGV4IGZyb20gJy4vc2hhZGVyL3ZlcnRleC5nbHNsJztcblxuY2xhc3MgU2tldGNoIHtcblx0Y29uc3RydWN0b3IoY29udGFpbmVyKSB7XG5cdFx0dGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG5cblx0XHRjb25zdCBmcnVzdHVtU2l6ZSA9IDEwO1xuXHRcdGNvbnN0IGFzcGVjdCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0O1xuXHRcdHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYShmcnVzdHVtU2l6ZSAqIGFzcGVjdCAvIC0gMiwgZnJ1c3R1bVNpemUgKiBhc3BlY3QgLyAyLCBmcnVzdHVtU2l6ZSAvIDIsIGZydXN0dW1TaXplIC8gLSAyLCAtMTAwMCwgMTAwMCApO1xuXHRcdC8vIHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDUwLCB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCwgMC4wMSwgMTAwMCk7XG5cdCAgdGhpcy5jYW1lcmEucG9zaXRpb24uc2V0KDAsIDcsIDEwKTtcblx0ICB0aGlzLmNhbWVyYS5sb29rQXQobmV3IFRIUkVFLlZlY3RvcjMoKSk7XG5cdFx0dGhpcy5jYW1lcmEucm90YXRlWigxMzApXG5cblx0ICB0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG5cblx0XHR0aGlzLnJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoIHsgYW50aWFsaWFzOiB0cnVlIH0gKTtcblx0ICB0aGlzLnJlbmRlcmVyLnNldFNpemUoIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQgKTtcblx0ICB0aGlzLnJlbmRlcmVyLnNldEFuaW1hdGlvbkxvb3AoIHRoaXMuYW5pbWF0aW9uLmJpbmQodGhpcykgKTtcblxuXHRcdHRoaXMudGltZSA9IDA7XG5cblx0XHR0aGlzLmNvbG9ycyA9IFtcblx0XHRcdG5ldyBUSFJFRS5Db2xvciggMHhmZGYzZDAgKSxcblx0XHRcdG5ldyBUSFJFRS5Db2xvciggMHhmZWI3YTUgKSxcblx0XHRcdG5ldyBUSFJFRS5Db2xvciggMHhmN2FhYjAgKSxcblx0XHRcdG5ldyBUSFJFRS5Db2xvciggMHhkMjdjODcgKSxcblx0XHRcdG5ldyBUSFJFRS5Db2xvciggMHhhZTY5N2MgKSxcblx0XHRdO1xuXG5cdFx0dGhpcy5pbml0KCk7XG5cdH1cblxuXHRpbml0KCkge1xuXHRcdHRoaXMuZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeSggMiwgMiwgMSwgNCwgMSwgdHJ1ZSk7XG5cblx0XHR0aGlzLm1hdGVyaWFsID0gbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsKHtcblx0XHRcdHNpZGU6IFRIUkVFLkRvdWJsZVNpZGUsXG5cdFx0XHR1bmlmb3Jtczoge1xuXHRcdFx0XHR0aW1lOiB7dHlwZTogJ2YnLCB2YWx1ZTogdGhpcy50aW1lfSxcblx0XHRcdFx0b2Zmc2V0OiB7dHlwZTogJ2YnLCB2YWx1ZTogMH0sXG5cdFx0XHRcdGNvbG9yOiB7dHlwZTogJ2MnLCB2YWx1ZTogMH0sXG5cdFx0XHR9LFxuXHRcdFx0ZnJhZ21lbnRTaGFkZXI6IGZyYWdtZW50LFxuXHRcdFx0dmVydGV4U2hhZGVyOiB2ZXJ0ZXgsXG5cdFx0fSk7XG5cblx0XHRjb25zdCBudW1iZXJPZkN5bGluZGVycyA9IDEwO1xuXHRcdHRoaXMubWF0ZXJpYWxzID0gW107XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlck9mQ3lsaW5kZXJzOyBpKyspIHtcblx0XHRcdGNvbnN0IG5ld01hdGVyaWFsID0gdGhpcy5tYXRlcmlhbC5jbG9uZSgpO1xuXHRcdFx0bmV3TWF0ZXJpYWwudW5pZm9ybXMub2Zmc2V0LnZhbHVlID0gaTtcblx0XHRcdG5ld01hdGVyaWFsLnVuaWZvcm1zLmNvbG9yLnZhbHVlID0gdGhpcy5jb2xvcnNbaSAlIDVdO1xuXG5cdFx0XHR0aGlzLm1hdGVyaWFscy5wdXNoKG5ld01hdGVyaWFsKTtcblxuXHRcdFx0Y29uc3QgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKCB0aGlzLmdlb21ldHJ5LCBuZXdNYXRlcmlhbCApO1xuXHRcdCAgbWVzaC5wb3NpdGlvbi55ID0gaSAtIDU7XG5cblx0XHQgIHRoaXMuc2NlbmUuYWRkKCBtZXNoICk7XG5cdFx0fVxuXHRcdFxuXHRcdHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudClcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemUuYmluZCh0aGlzKSk7XG5cdH1cblxuXHRhbmltYXRpb24oKSB7XG5cdFx0dGhpcy50aW1lICs9IDAuMDA1O1xuXG5cdFx0LyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cblx0XHR0aGlzLm1hdGVyaWFscy5mb3JFYWNoKCBtYXQgPT4ge1xuXHRcdFx0bWF0LnVuaWZvcm1zLnRpbWUudmFsdWUgPSB0aGlzLnRpbWU7XG5cdFx0fSk7XG5cdFx0dGhpcy5yZW5kZXJlci5yZW5kZXIoIHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhICk7XG5cdH1cblxuXHRyZXNpemUgKCkge1xuXHRcdGNvbnN0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cdFx0Y29uc3QgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXHRcdHRoaXMucmVuZGVyZXIuc2V0U2l6ZSggd2lkdGgsIGhlaWdodCApO1xuXHQgIHRoaXMuY2FtZXJhLmFzcGVjdCA9IHdpZHRoIC8gaGVpZ2h0O1xuXHRcdHRoaXMuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblx0fVxufVxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG5jb25zdCBza2V0Y2ggPSBuZXcgU2tldGNoKGNvbnRhaW5lcik7XG5cbnNheUhlbGxvKCk7Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQVJBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app.js\n");

/***/ }),

/***/ "./lib/sayHello.js":
/*!*************************!*\
  !*** ./lib/sayHello.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction sayHello() {\n    if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {\n        var args = ['\\n %c Made with ❤️ by Rivercode %c http://www.riverco.de/ %c %c 🐳 \\n\\n', 'border: 1px solid #000;color: #000; background: #fff001; padding:5px 0;', 'color: #fff; background: #1c1c1c; padding:5px 0;border: 1px solid #000;', 'background: #fff; padding:5px 0;', 'color: #b0976d; background: #fff; padding:5px 0;'];\n        window.console.log.apply(console, args);\n    } else if (window.console) {\n        window.console.log('Made with love ❤️ Riverco.de - http://www.riverco.de/  ❤️');\n    }\n}\nmodule.exports = sayHello;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvc2F5SGVsbG8uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2xpYi9zYXlIZWxsby5qcz8xNTc1Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHNheUhlbGxvKCkge1xuICAgIGlmIChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignY2hyb21lJykgPiAtMSkge1xuICAgICAgICB2YXIgYXJncyA9IFsnXFxuICVjIE1hZGUgd2l0aCDinaTvuI8gYnkgUml2ZXJjb2RlICVjIGh0dHA6Ly93d3cucml2ZXJjby5kZS8gJWMgJWMg8J+QsyBcXG5cXG4nLCAnYm9yZGVyOiAxcHggc29saWQgIzAwMDtjb2xvcjogIzAwMDsgYmFja2dyb3VuZDogI2ZmZjAwMTsgcGFkZGluZzo1cHggMDsnLCAnY29sb3I6ICNmZmY7IGJhY2tncm91bmQ6ICMxYzFjMWM7IHBhZGRpbmc6NXB4IDA7Ym9yZGVyOiAxcHggc29saWQgIzAwMDsnLCAnYmFja2dyb3VuZDogI2ZmZjsgcGFkZGluZzo1cHggMDsnLCAnY29sb3I6ICNiMDk3NmQ7IGJhY2tncm91bmQ6ICNmZmY7IHBhZGRpbmc6NXB4IDA7J107XG4gICAgICAgIHdpbmRvdy5jb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBhcmdzKTtcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5jb25zb2xlKSB7XG4gICAgICAgIHdpbmRvdy5jb25zb2xlLmxvZygnTWFkZSB3aXRoIGxvdmUg4p2k77iPIFJpdmVyY28uZGUgLSBodHRwOi8vd3d3LnJpdmVyY28uZGUvICDinaTvuI8nKTtcbiAgICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNheUhlbGxvOyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/sayHello.js\n");

/***/ }),

/***/ "./shader/fragment.glsl":
/*!******************************!*\
  !*** ./shader/fragment.glsl ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"#define GLSLIFY 1\\nuniform float time;\\nuniform float offset;\\nuniform vec3 color;\\nvarying vec2 vUv;\\n\\nvoid main()\\t{\\n  float o = fract(time + offset / 10.);\\n  float length = 0.2;\\n\\n  if (abs(vUv.x - o) > length && abs(vUv.x - o + 1.) > length && abs(vUv.x - o - 1.) > length) {\\n    discard;\\n  }\\n\\n\\tgl_FragColor = vec4(color * 0.4, 1.);\\n\\n  if (gl_FrontFacing) {\\n\\t  gl_FragColor = vec4(color, 1.);\\n  }\\n}\"\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zaGFkZXIvZnJhZ21lbnQuZ2xzbC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NoYWRlci9mcmFnbWVudC5nbHNsPzE0YjkiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIiNkZWZpbmUgR0xTTElGWSAxXFxudW5pZm9ybSBmbG9hdCB0aW1lO1xcbnVuaWZvcm0gZmxvYXQgb2Zmc2V0O1xcbnVuaWZvcm0gdmVjMyBjb2xvcjtcXG52YXJ5aW5nIHZlYzIgdlV2O1xcblxcbnZvaWQgbWFpbigpXFx0e1xcbiAgZmxvYXQgbyA9IGZyYWN0KHRpbWUgKyBvZmZzZXQgLyAxMC4pO1xcbiAgZmxvYXQgbGVuZ3RoID0gMC4yO1xcblxcbiAgaWYgKGFicyh2VXYueCAtIG8pID4gbGVuZ3RoICYmIGFicyh2VXYueCAtIG8gKyAxLikgPiBsZW5ndGggJiYgYWJzKHZVdi54IC0gbyAtIDEuKSA+IGxlbmd0aCkge1xcbiAgICBkaXNjYXJkO1xcbiAgfVxcblxcblxcdGdsX0ZyYWdDb2xvciA9IHZlYzQoY29sb3IgKiAwLjQsIDEuKTtcXG5cXG4gIGlmIChnbF9Gcm9udEZhY2luZykge1xcblxcdCAgZ2xfRnJhZ0NvbG9yID0gdmVjNChjb2xvciwgMS4pO1xcbiAgfVxcbn1cIiJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./shader/fragment.glsl\n");

/***/ }),

/***/ "./shader/vertex.glsl":
/*!****************************!*\
  !*** ./shader/vertex.glsl ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"#define GLSLIFY 1\\nuniform float time;\\nvarying vec2 vUv;\\n\\nvoid main() {\\n  vUv = uv;\\n  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\\n}\"\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zaGFkZXIvdmVydGV4Lmdsc2wuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zaGFkZXIvdmVydGV4Lmdsc2w/NzNlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiI2RlZmluZSBHTFNMSUZZIDFcXG51bmlmb3JtIGZsb2F0IHRpbWU7XFxudmFyeWluZyB2ZWMyIHZVdjtcXG5cXG52b2lkIG1haW4oKSB7XFxuICB2VXYgPSB1djtcXG4gIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZlYzQoIHBvc2l0aW9uLCAxLjAgKTtcXG59XCIiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./shader/vertex.glsl\n");

/***/ })

/******/ });