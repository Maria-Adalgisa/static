package main

import (
	"fmt"
	"time"
)

func pacotes() {
    loc, _ := time.LoadLocation("America/Sao_Paulo")
    now := time.Now().In(loc)
    fmt.Println("Current time in São Paulo:", now)
}

/*package main

import (
	"fmt"
	"time"
)

func pacotes() {
    start := time.Now()
    // Simulate a long-running task
    time.Sleep(2 * time.Second)
    duration := time.Since(start)
    fmt.Println("Duration:", duration)
}*/


/*package main

import (
	"fmt"
	"time"
)
func pacotes()  {
    now := time.Now()
    formattedTime := now.Format("2006-01-02 15:04:05")
    fmt.Println("Formatted time:",formattedTime)
    
}*/

/*package main

import (
	"fmt"
	"time"
)

func pacotes() {
    now := time.Now()
    fmt.Println("Current time:", now)
}*/

/*package main

import (
	"fmt"
	"os"
	"strings"
)

func pacotes() {
    fmt.Println(strings.Join(os.Args[1:], " "))
    
}*/