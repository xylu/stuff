package exercises;

import org.junit.Test;

import static exercises.RunnableEx.uncheck;

public class RunnableExTest {

    @Test
    public void shouldCompile() throws Exception {

        new Thread(uncheck(() ->{
            System.out.println("Running...");
            Thread.sleep(1000);
            System.out.println("Completed.");
        })
        ).start();
    }
}
