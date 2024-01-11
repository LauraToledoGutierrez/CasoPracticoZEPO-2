export class SingletonConfig {
    private static instance: SingletonConfig | null = null;
  
    private constructor() {
    }
  
    // Access to the single instance
    static getInstance(): SingletonConfig {
      if (!SingletonConfig.instance) {
        SingletonConfig.instance = new SingletonConfig();
      }
      return SingletonConfig.instance;
    }
    result: string = 'ZEPO Practical Case 2 -> PATRON SINGLETON';
  }
  
  export default SingletonConfig;
  