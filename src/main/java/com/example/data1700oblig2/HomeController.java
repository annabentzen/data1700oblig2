package com.example.data1700oblig2;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

import com.example.data1700oblig2.Order;

@RestController
public class HomeController {

    public final List<Order> orders = new ArrayList<>();
    public final List<String> filmRegister = List.of("Barbie", "Oppenheimer", "Gutten og hegren", "Aftersun");

    @GetMapping("/orders")
    public List<Order> getOrders() {
        return orders;
    }

    @GetMapping("/hentFilmer")
    public List<String> hentFilmer () {
        return filmRegister;
    }

    @PostMapping("/orders")
    public void addOrder(@RequestBody Order order) {

        orders.add(order);
    }

    @RequestMapping(value = "/orders", method = RequestMethod.DELETE)
    public void deleteOrders() {
        orders.clear();
    }
}