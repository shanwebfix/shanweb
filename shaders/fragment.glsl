uniform float u_time;
uniform vec2 u_mouse;
varying vec2 vUv;

void main() {
    vec2 st = vUv;

    // Radial distance from flame center (mouse)
    float d = distance(st, u_mouse);

    // Base glow intensity
    float glow = exp(-d * 40.0);

    // Flicker variation
    float flicker = sin(u_time * 30.0 + st.y * 60.0) * 0.4 + 0.6;

    // Combine intensity and flicker
    float flame = glow * flicker;

    // Fire color: deep orange core to yellow edge
    vec3 color = vec3(1.0, 0.3, 0.0) * flame; // core orange
    color += vec3(1.0, 0.7, 0.2) * pow(flame, 1.5); // yellow highlight
    color += vec3(0.2, 0.05, 0.0) * (1.0 - flame); // dark edge

    gl_FragColor = vec4(color, 1.0);
}
