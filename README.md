# Rail-Rush
It is the Python implement Computer vision model which is used in the Rail-Rush App to detect crowd density in public transportation.

For the application code base check out this [repo](https://github.com/husainattar/RailRush-React-App)

This is a Keras with tensorflow backend Implementation.We have Implemented a CSRNET model with a slight modification 
by using slight help from  MCNN model.
We have trained our Model on Shanghai Dataset with the Links provided below.

[CSRNET Original Paper](https://arxiv.org/abs/1802.10062)

[MCNN Paper](https://zpascal.net/cvpr2016/Zhang_Single-Image_Crowd_Counting_CVPR_2016_paper.pdf)

[Shanghai-Dataset](https://drive.google.com/file/d/16dhJn7k4FWVwByRsQAEpl9lwjuV03jVI/view)

# Understanding the Dataset

We have used the .mat file provided and converted into density map.
Preprocesing process in the paper and in our implementation is almost same with slight modification.
For better understanding of the dataset and mat file check out the link provided.

[Mat File Understanding](https://www.researchgate.net/post/explain_ground-truth_mat_file_of_an_image_for_CNN).

We have used **K-nearest node algorithm** for finding the closest nodes rather than going with linear search.

We have also used the multiplying factor of **0.1** rather than provided in the paper.

# Models , Working and Testing

As stated above we have follow the paper but with slight modification by adding the batch_Normalize layer for efficient result.

Before using this technique we have also used **HOG_MODEL** and **HAAR_CASCADE_MODEL** and their implementation is also provided
in the repository.

We have generated 2 models from dataset using the CSRNET technique one for sparse and other for dense crowd.

We have tested this model on Videos on platform and generated the result.



