package com.example.demo.contorll;
import javax.sound.sampled.*;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;

public class AudioRecorderToMP3 {
    private static final int SAMPLE_RATE = 44100; // 44.1kHz
    private static final int SAMPLE_SIZE_IN_BITS = 16; // 16位
    private static final int CHANNELS = 1; // 单声道
    private static final boolean SIGNED = true;
    private static final boolean BIG_ENDIAN = false;
    
    private TargetDataLine line;
    private boolean isRecording = false;
    
    public void startRecording(String outputFilePath) {
        try {
            // 设置音频格式
            AudioFormat format = new AudioFormat(SAMPLE_RATE, SAMPLE_SIZE_IN_BITS, 
                                              CHANNELS, SIGNED, BIG_ENDIAN);
            
            // 获取麦克风输入
            DataLine.Info info = new DataLine.Info(TargetDataLine.class, format);
            line = (TargetDataLine) AudioSystem.getLine(info);
            line.open(format);
            line.start();
            
            isRecording = true;
            System.out.println("开始录音... (按Enter键停止)");
            
            // 创建线程进行录音
            new Thread(() -> {
                ByteArrayOutputStream out = new ByteArrayOutputStream();
                byte[] buffer = new byte[4096];
                
                while (isRecording) {
                    int count = line.read(buffer, 0, buffer.length);
                    if (count > 0) {
                        out.write(buffer, 0, count);
                    }
                }
                
                // 录音结束，保存为MP3
                try {
                    saveAsMP3(out.toByteArray(), outputFilePath);
                    System.out.println("录音已保存为: " + outputFilePath);
                } catch (IOException e) {
                    System.err.println("保存MP3文件时出错: " + e.getMessage());
                }
            }).start();
            
        } catch (LineUnavailableException e) {
            System.err.println("无法访问音频设备: " + e.getMessage());
        }
    }
    
    public void stopRecording() {
        isRecording = false;
        line.stop();
        line.close();
    }
    
    private void saveAsMP3(byte[] pcmData, String outputPath) throws IOException {
        try {
            // 创建PCM音频输入流
            AudioFormat format = new AudioFormat(SAMPLE_RATE, SAMPLE_SIZE_IN_BITS, 
                                              CHANNELS, SIGNED, BIG_ENDIAN);
            ByteArrayInputStream bais = new ByteArrayInputStream(pcmData);
            AudioInputStream audioInputStream = new AudioInputStream(bais, format, 
                                                                  pcmData.length / format.getFrameSize());
            
            // 设置MP3格式
            AudioFormat.Encoding mp3Encoding = new AudioFormat.Encoding("MPEG1L3");
            AudioFormat mp3Format = new AudioFormat(mp3Encoding, SAMPLE_RATE, 
                                                  AudioSystem.NOT_SPECIFIED, 
                                                  CHANNELS, AudioSystem.NOT_SPECIFIED, 
                                                  AudioSystem.NOT_SPECIFIED, false);
            
            // 写入MP3文件
            AudioSystem.write(audioInputStream, AudioFileFormat.Type.WAVE, new File(outputPath));
            
        } catch (Exception e) {
            throw new IOException("转换为MP3失败: " + e.getMessage(), e);
        }
    }
    
    public static void main(String[] args) throws IOException {
        AudioRecorderToMP3 recorder = new AudioRecorderToMP3();
        recorder.startRecording("recording.mp3");
        
        // 等待用户按Enter键停止录音
        System.in.read();
        recorder.stopRecording();
    }
}