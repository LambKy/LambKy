package main

import "fmt"
//타입 지정
type MessageStatus string

const (
	MESSAGE_FAIL        MessageStatus = "0"
	MESSAGE_REQUEST     MessageStatus = "1"
	MESSAGE_IN_PROGRESS MessageStatus = "2"
	MESSAGE_SUCCESS     MessageStatus = "3"
	MESSAGE_CANCELED    MessageStatus = "4"
	MESSAGE_DUPLICATED  MessageStatus = "5"
)
func main() {
fmt.Println(MESSAGE_FAIL)
}