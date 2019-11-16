import numpy as np

class  logistic:
    def __init__(self,learning_rate=0.001,n_i=1000):
        self.lr=learning_rate
        self.n=n_iter
        self.weights=None
        self.bias=None


    def fit(self,X,y):
        
        # Now initialising the parameters
        samples,features=X.shape
        self.weights=np.zeros(samples)
        self.bias=0

        #Gradient descent part comes  here
        for _ in range(self.n):
            # simple linear regression part comes here (wx+b)
            linear_model=np.dot(X,self.weights)+self.bias
            # applying sigmoid function 
            y_predict=self.sigmoid(linear_model)

            #Now we compute the gradient here
            #dw=(1/n)*(2x*(yi-i))
            dw=(1/samples)*np.dot(X.T,(y_predict-y))
            #db=(1/n)*sum(yi-i))
            db=(1/samples)*np.sum(y_predict-y)

            #updating the parameter we do here(w=w-lr*dw) & (b=b-lr*db)
            self.weights -=self.lr*dw
            self.bias -=self.lr*db

    # predicting  the  value for the test data
    def predict(self,X):
        linear_model=np.dot(X,self.weights)+self.bias
        y_predict=self.sigmoid(linear_model)
        y_predicted_class=[]
        for i in range(y_predicted):
            if i > 0.5:
                y_predicted_class[i]=1
            else:
                 y_predicted_class[i]=0
        return  np.array(y_predicted_class)

     #sigmoid function for logistic regression
    def sigmoid(self,x):
        return (1/(1+np.exp(-x)))