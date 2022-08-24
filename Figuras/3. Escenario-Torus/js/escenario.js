const scene = new THREE.Scene();
scene.background = new THREE.Color(0xB1E128);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

scene.fog = new THREE.Fog(0xFFFFFF, 20, 35);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshBasicMaterial({ color: 0x7977EB });
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

camera.position.z = 25;

function animate() {
    requestAnimationFrame(animate);
    torus.rotation.y -= 0.02;
    renderer.render(scene, camera);
}
animate();