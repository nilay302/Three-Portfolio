import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
const scene = new THREE.Scene()
scene.add(new THREE.AxesHelper(5))
scene.background = new THREE.Color('#0B0028');
// scene.background = new THREE.Color('#2E012A');

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
)
camera.position.z =25;
camera.position.x = 0;
camera.position.y = 50;
camera.lookAt(new THREE.Vector3(0, 0, 0));

const canvas = document.getElementById('bg');
// canvas.style.zIndex = -1
const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(window.innerWidth, window.innerHeight)
// document.body.appendChild(renderer.domElement)
renderer.render(scene,camera);
const controls = new OrbitControls(camera, renderer.domElement)
// controls.enableDamping = true
// controls.enablePan=false
// controls.enableZoom=false
window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    render()
}

function animate() {
  requestAnimationFrame(animate)
  render()
}

function render() {
  renderer.render(scene, camera)
}

animate()