package exercises;

import org.hamcrest.CoreMatchers;
import org.junit.Assert;
import org.junit.Test;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.junit.Assert.assertThat;

public class RunnerTest {

    @Test
    public void shouldRunInOrder() throws Exception {
        //given
        List<String> tasks = new ArrayList<>();
        Runnable runnableInOrder = Runner.andThen(() -> tasks.add("1"), () -> tasks.add("2"));

        //when
        runnableInOrder.run();

        //then
        assertThat(tasks, equalTo(Arrays.asList("1", "2")));
    }

    @Test
    public void testCapturing() throws Exception {
        //given
        List<String> names = Arrays.asList("Joe", "Jane", "John");
        List<String> output = new ArrayList<>();
        List<Runnable> runners = new ArrayList<>();
        //when
        for (String name : names) {
            runners.add(() -> {
                output.add(name);
            });
        }

        for (Runnable runner : runners) {
            runner.run();
        }

        //then
        assertThat(output, equalTo(names));

    }
}
