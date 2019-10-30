const canvas = document.getElementById('glcanvas');

const vsSource = `
  attribute vec4 aVertexPosition;

  uniform mat4 uModelViewMatrix;
  uniform mat4 uProjectionMatrix;

  void main() {
    gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
  }
`;

const fsSource = `
  void main() {
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
  }
`;

const loadShader = (gl, type , source)=>{
  const shader = gl.createShader(type);
  gl.shaderSource(shader , source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    alert('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}
const initShader = (gl , vsShader , fsShader) =>{
  
}

const main = ()=>{

    const gl = canvas.getContext('webgl');

    if (gl === null) {
        alert("Unable to initialize WebGL. Your browser or machine may not support it.");
        return;
      }
    initShader(gl , vsSource , fsSource)
    gl.clearColor(0 , 0 , 0 , 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
}

window.onload = main;
