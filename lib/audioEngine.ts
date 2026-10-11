// Advanced Web Audio API Binaural Engine for CIA Gateway Protocols
// Supports:
// - 10 Hz Alpha (Active Focus, Decision Making, Test Taking, Gateway Focus 10)
// - 4 Hz Theta (Subconscious Consolidation, Deep Learning, Memory Palace Encoding)
// - 40 Hz Gamma (Hyper-Pattern Recognition & Chess Tactical Calculation)

export type BrainwaveMode = 'alpha_10hz' | 'theta_4hz' | 'gamma_40hz';

class GatewayAudioEngine {
  private ctx: AudioContext | null = null;
  private oscLeft: OscillatorNode | null = null;
  private oscRight: OscillatorNode | null = null;
  private gainNode: GainNode | null = null;
  private noiseNode: AudioBufferSourceNode | null = null;
  private noiseGain: GainNode | null = null;
  private merger: ChannelMergerNode | null = null;
  private isRunning: boolean = false;
  private currentMode: BrainwaveMode = 'alpha_10hz';
  private currentVolume: number = 0.25;

  public start(mode: BrainwaveMode = 'alpha_10hz', volume: number = 0.25, carrierFreq: number = 216) {
    if (this.isRunning) {
      this.stop();
    }

    try {
      const AudioCtxClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtxClass) return;

      this.ctx = new AudioCtxClass();
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      this.currentMode = mode;
      this.currentVolume = volume;

      let beatFreq = 10;
      if (mode === 'theta_4hz') beatFreq = 4;
      if (mode === 'gamma_40hz') beatFreq = 40;

      // Master Gain
      this.gainNode = this.ctx.createGain();
      this.gainNode.gain.setValueAtTime(volume, this.ctx.currentTime);

      // Stereo Merger
      this.merger = this.ctx.createChannelMerger(2);

      // Left Ear Oscillator (Base Carrier)
      this.oscLeft = this.ctx.createOscillator();
      this.oscLeft.type = 'sine';
      this.oscLeft.frequency.setValueAtTime(carrierFreq, this.ctx.currentTime);

      // Right Ear Oscillator (Carrier + Beat Offset)
      this.oscRight = this.ctx.createOscillator();
      this.oscRight.type = 'sine';
      this.oscRight.frequency.setValueAtTime(carrierFreq + beatFreq, this.ctx.currentTime);

      // Connect each oscillator to separate stereo ear channel
      this.oscLeft.connect(this.merger, 0, 0);
      this.oscRight.connect(this.merger, 0, 1);
      this.merger.connect(this.gainNode);

      // Add gentle soothing ambient pink noise bed for auditory comfort
      const bufferSize = this.ctx.sampleRate * 2;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        output[i] = (b0 + b1 + b2) * 0.08;
      }

      this.noiseNode = this.ctx.createBufferSource();
      this.noiseNode.buffer = noiseBuffer;
      this.noiseNode.loop = true;

      // Low pass filter for soft rain/cosmic ambient feeling
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450, this.ctx.currentTime);

      this.noiseGain = this.ctx.createGain();
      this.noiseGain.gain.setValueAtTime(0.04, this.ctx.currentTime);

      this.noiseNode.connect(filter);
      filter.connect(this.noiseGain);
      this.noiseGain.connect(this.gainNode);

      this.gainNode.connect(this.ctx.destination);

      this.oscLeft.start();
      this.oscRight.start();
      this.noiseNode.start();
      this.isRunning = true;
    } catch (err) {
      console.warn('AudioContext failed to initialize:', err);
    }
  }

  public setMode(mode: BrainwaveMode) {
    if (this.isRunning) {
      this.start(mode, this.currentVolume);
    } else {
      this.currentMode = mode;
    }
  }

  public stop() {
    if (!this.isRunning || !this.ctx) return;
    try {
      if (this.gainNode && this.ctx) {
        this.gainNode.gain.setValueAtTime(this.gainNode.gain.value, this.ctx.currentTime);
        this.gainNode.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.2);
      }
      setTimeout(() => {
        try {
          this.oscLeft?.stop();
          this.oscRight?.stop();
          this.noiseNode?.stop();
          this.oscLeft?.disconnect();
          this.oscRight?.disconnect();
          this.noiseNode?.disconnect();
          this.ctx?.close();
        } catch (_) {}
        this.ctx = null;
        this.isRunning = false;
      }, 250);
    } catch (_) {
      this.isRunning = false;
    }
  }

  public setVolume(vol: number) {
    this.currentVolume = vol;
    if (this.gainNode && this.ctx) {
      this.gainNode.gain.setValueAtTime(Math.max(0, Math.min(1, vol)), this.ctx.currentTime);
    }
  }

  public getVolume(): number {
    return this.currentVolume;
  }

  public getMode(): BrainwaveMode {
    return this.currentMode;
  }

  public isActive(): boolean {
    return this.isRunning;
  }
}

export const gatewayAudio = new GatewayAudioEngine();
