set ns [new Simulator]

set nf [open out.nam w]
$ns namtrace-all $nf

proc finish {} {

    global ns nf
    $ns flush-trace
    close $nf
    exec nam out.nam &
    exit 0
}

set n0 [$ns node]
set n1 [$ns node]
set n2 [$ns node]
set n3 [$ns node]
set n4 [$ns node]

$ns duplex-link $n0 $n1 1Mb 10ms DropTail
$ns duplex-link $n1 $n2 1Mb 10ms DropTail
$ns duplex-link $n2 $n3 1Mb 10ms DropTail
$ns duplex-link $n3 $n4 1Mb 10ms DropTail

set udp0 [new Agent/UDP]
$ns attach-agent $n0 $udp0

set udp1 [new Agent/UDP]
$ns attach-agent $n1 $udp1

set udp2 [new Agent/UDP]
$ns attach-agent $n2 $udp2

set udp3 [new Agent/UDP]
$ns attach-agent $n3 $udp3

set cbr0 [new Application/Traffic/CBR]
$cbr0 set packetSize_ 500
$cbr0 set interval_ 0.005
$cbr0 attach-agent $udp0

set cbr1 [new Application/Traffic/CBR]
$cbr1 set packetSize_ 500
$cbr1 set interval_ 0.005
$cbr1 attach-agent $udp1

set cbr2 [new Application/Traffic/CBR]
$cbr2 set packetSize_ 500
$cbr2 set interval_ 0.005
$cbr2 attach-agent $udp2

set cbr3 [new Application/Traffic/CBR]
$cbr3 set packetSize_ 500
$cbr3 set interval_ 0.005
$cbr3 attach-agent $udp3


set null0 [new Agent/Null]
$ns attach-agent $n1 $null0

set null1 [new Agent/Null]
$ns attach-agent $n2 $null1

set null2 [new Agent/Null]
$ns attach-agent $n3 $null2

set null3 [new Agent/Null]
$ns attach-agent $n4 $null3

$ns connect $udp0 $null0
$ns connect $udp1 $null1
$ns connect $udp2 $null2
$ns connect $udp3 $null3


$ns at 0.0 "$cbr0 start"
$ns at 2.0 "$cbr0 stop"

$cbr1 attach-agent $udp1
$ns at 2.0 "$cbr1 start"
$ns at 3.0 "$cbr1 stop"


$cbr2 attach-agent $udp2
$ns at 3.0 "$cbr2 start"
$ns at 4.0 "$cbr2 stop"


$cbr3 attach-agent $udp3
$ns at 4.0 "$cbr3 start"
$ns at 5.0 "$cbr3 stop"
$ns at 5.1 "finish"


$ns run