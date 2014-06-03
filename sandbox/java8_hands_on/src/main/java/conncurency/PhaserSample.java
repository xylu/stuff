package conncurency;

import com.google.common.collect.ImmutableList;

import java.util.List;
import java.util.concurrent.Phaser;

import static com.google.common.collect.ImmutableList.of;

/**
 * @since 1.7
 */

public class PhaserSample {

    static void runTasks(List<Runnable> tasks)
            throws InterruptedException {
        final Phaser phaser = new Phaser(1); // we register ourselves
        for (final Runnable task : tasks) {
            phaser.register(); // and we register all our new threads
            new Thread() {
                public void run() {
                    phaser.arriveAndAwaitAdvance();
                    System.out.println("Running: " + task);
                    task.run();
                }
            }.start();
            Thread.sleep(1000);
        }
        phaser.arriveAndDeregister(); // we let the main thread arrive
    }

    public static void main(String[] args) throws InterruptedException {
        runTasks(of(() -> {
            System.out.println("A");
        }, () -> {
            System.out.println("B");
        }, () -> {
            System.out.println("C");
        }));
    }
}
