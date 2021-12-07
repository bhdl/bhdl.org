;; variable definition
(define a 1)
(define b 2)
;; expression
(+ a b) ; => 3

;; function
(define (twice f v)
  (f (f v)))

;; function call
(twice sqrt 16) => 2


(define (remove-dups l)
  ;; case conditional
  (cond
   [(empty? l) empty]
   [(empty? (rest l)) l]
   [else
    (let ([i (first l)])
      ;; if-else conditional
      (if (equal? i (first (rest l)))
          ;; recursive function calls
          (remove-dups (rest l))
          (cons i (remove-dups (rest l)))))]))
 

; (remove-dups (list "a" "b" "b" "b" "c" "c")) ; => '("a" "b" "c")



(define hello_world
    (part      [R1   (R '1k     )   0805                     ]
               [C1   (C '1p     )   0805                     ]
               [SW1  (SPST_SW   )   TACTILE_SWITCH_SMD_4.5mm ]
               [D1   (LED       )   PTH_1.27mm               ]
               [BT1  (Battery '9)   CR2032                   ]
    )
    (wire      (series BT1.pos SW1 R1 C1 D1 BT1.neg) ; a clockwise series connection
   )
    (layout
       (canvas (rectangle 10 10))  ; PCB shape and size
       (vstack (rotate SW1 90)  ; orientation of SW1
               BT1
               canvas 10) ; place SW1 10mm above lower edge of PCB
   )
)

(make-PCB hello_world)


(circuit RC
         (pin In Out GND)
         (part [R1 (R In Out)]
               [C1 (C Out GND)]
         )
) ; end circuit

(circuit TripleButton 
    (param [mode "Release"] ) ; keyword parameters
    (part [buttons (for ([i 3]) (SW) ) ]
          ; create an array of 3 switches by
          ; calling the circuit/function SW thrice
          [bat1 (Battery '3V)]
          [u1 (ESP01)]
    ); end part 
    (wire 
      (net bat1.pos u1.VCC)
      (net bat1.neg u1.GND)
      (for ([btn buttons]; Python:  for btn in buttons:
            [ctrl_pin (list (if (= mode "Release")
                                u1.CH_PD 
                                u1.RST ; else case
                            ); end if
                            u1.GPIO0 u1.GPIO2
                      ); end list
            ])
        (series bat1.pos (R '10k) btn bat1.neg)
        (net ctrl_pin btn.1)
      ) ; end for
    ); end wire
)


(define energy
  (pin Output GND)
  (part  [R1  (R '1k  ) ] [C1  (C '1p  ) ]
         [SW1 (SPST_SW) ] [BT1 (Battery '9) ]
  )
  (wire (series self.GND BT1 SW1 R1 C1 self.Output))
)
(define (light n)
  (pin Anode Cathode)
  (part  [LED_array[n]   (LED) ]  )
  (wire 
     (for/list [i LED_array] ; for each LED
        (bus self [Anode Cathode]
                i [Anode Cathode] 
        )
     )
)
(define (together n)
  (part [power_part (energy)] 
        [light_part (light n)] 
  )
  (wire (bus power_part [Output GND]
             light_part [Anode Cathode]))
)
(make-PCB together 5)


(define ezmute
   (part  [Ds (for_range 3 (LED))]  ; Ds is 4 LEDs
          [J3        (Conn 01 06)]
          [U1          (ATtiny85)]
           )
   (wire 
     (for/list ([D Ds])        ;for each D in Ds
       (bus (D  [R    G   B ]) ; R, G, B pins of every D
            (U1 [PB0 PB1 PB5]  ; connects to U1's PB0, PB1, & PB5
            (J1 [2    3   1 ]) ; and J1's 2, 3, and 1 pins
       ) ; end of bus
                   
     ) ; end of for-loop 
  ) ; end of wire
); end of the circuit ezmute 

(make-pcb ezmute)


(define (LED_matrix num_rows num_columns)
   (pin R G B Cathode)
   (part [Ds (for_range (* num_rows num_columns) [LED])]  
   )     ; Ds=[LED for i in range(num_rows*num_columns) ]
   (wire 
       (for/list ([D Ds]) ; hook every D's RGB to group RGB
                 (bus (D    [R G B Cathode])  
                      (self [R G B Cathode]) ) 
     ); end of for
   ); end of wire
)

(define ezmute
   (part  [DMatrix (LED_matrix 2 2)]  ; 2x2 LED matrix 
            [J3 (Conn 01 06)]
            [U1 (ATtiny85)]
           )
  (wire
      (bus (DMatrix  [R    G   B ]) 
           (U1       [PB0 PB1 PB5])  
           (J1       [2    3   1 ]) ) ; end of bus         
  ) ; end of wire
); end of the circuit ezmute 



(make-pcb ezmute)



