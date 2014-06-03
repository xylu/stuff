package exercises;

@FunctionalInterface
public interface RunnableEx {

    void run() throws Exception;


    public static Runnable uncheck(RunnableEx runner) {

        return () -> {
            try {
                runner.run();
            } catch (Exception e) {
                e.printStackTrace();
                //do sth more, e.g. fire alert to app console
            }

        };

    }
}
