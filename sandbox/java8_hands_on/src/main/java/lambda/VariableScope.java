package lambda;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.CountDownLatch;

public class VariableScope {

    public CountDownLatch thisTricky() {
        //this refers to  'this' of the method that creates the lambda
        //not the lambda itself
        CountDownLatch latch = new CountDownLatch(1);

        List<String> strings = new ArrayList<>();
        new Thread(() -> {
            System.out.println(this);
            latch.countDown();
            // strings is effectively final
            // (since variable is not assigned more than once)
            // however it's mutable -> DO NOT mutate it though (concurrency hazard)
            strings.add("B");
        }).start();
        return latch;

    }

    public static void main(String[] args) throws InterruptedException {
        Integer a = 1;
        //won't compile
//        Runnable r = () ->{int a;};

        VariableScope variableScope = new VariableScope();

        variableScope.thisTricky().await();

    }

    @Override public String toString() {
        return "VariableScope_" + System.identityHashCode(this);

    }
}
