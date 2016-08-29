// Need this empty line to stop big errors hmmm
#include "Adafruit_Thermal.h"

TCPClient client;
Adafruit_Thermal printer;

byte server[] = { 192, 168, 1, 70 };
int port = 2000;

void setup() {
  // Connect to USB serial
  Serial.begin(9600);
  Serial.println("USB connected");
  Serial1.begin(19200);
  printer.begin(&Serial1);
  Serial.println("Printer connected");
  Particle.function("requestData", requestData);
  Particle.function("printText", printText);

  String ssid = WiFi.SSID();
  Serial.print("SSID: ");
  Serial.println(ssid);

  int ping = WiFi.ping(server);
  Serial.print("Ping: ");
  Serial.println(ping);
}

void loop() {
  while(client.available()) {
    byte c = client.read();
    // Serial1.write(c);
  }

  if (!client.connected()) {
    client.stop();
  }
}

int requestData(String url) {
  Serial.println("Requesting data");

  if (client.connect(server, port)) {
    Serial.println("Client connected!!!");
  } else {
    Serial.println("Client failed to connect");
  }

  return 1;
}

int printText(String text) {
  printer.println(text);
  return 1;
}
