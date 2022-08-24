const scene = new THREE.Scene();
scene.background = new THREE.Color(0x01BDA3);

var loader = new THREE.TextureLoader();
loader.load('../img/fondo.jpg', function(texture) {
    scene.background = texture;
})

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

scene.fog = new THREE.Fog(0xFFFFFF, 3, 5);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshBasicMaterial({ color: 0xB1E128 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 4;

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.z += 0.02;
    cube.rotation.x += 0.02;
    renderer.render(scene, camera);
}
animate();