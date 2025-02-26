package main

import (
	"fmt"
	"os"
	"strings"
)

func teste() {
	fmt.Println(strings.Join(os.Args[1:], " "))
}