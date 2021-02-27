package com.crud.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path="/api")
public class TodoController {

    @Autowired
    private TodoService service;

    @GetMapping(path = "/todos")
    public Iterable<Todo> list(){
        return service.list();
    }

    @PostMapping(path = "/todo")
    public Todo save(@RequestBody Todo todo){
        return service.save(todo);
    }

    @PutMapping(path = "/todo")
    public Todo update(@RequestBody Todo todo){
        if(todo.getId()!=null){
            return service.save(todo);
        }
        throw new RuntimeException("No existe el id para actualizar");
    }

    @DeleteMapping(path = "/{id}/todo")
    public void delete(@PathVariable("id") Long id){
        service.delete(id);
    }

    @GetMapping(path = "/{id}/todo")
    public Todo get(@PathVariable("id") Long id){
        return service.get(id);
    }
}
