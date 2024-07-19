let count = 0
basic.showString("start!")
ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
ESP8266_IoT.connectWifi("AOffice", "88888888")
if (ESP8266_IoT.wifiState(true)) {
    basic.showString("C")
    basic.pause(1000)
    while (ESP8266_IoT.wifiState(true)) {
        AIoT.SendGoogleData();
        basic.pause(500)
        count += 1
        // basic.showNumber(count);
        basic.showString("!" + count)
    }
} else {
    basic.showString("N")
}
