import cv2
import numpy as np
import os

#Frame creator function
def getFrame(sec):
    cap.set(cv2.CAP_PROP_POS_MSEC,sec*1000)
    hasFrames,image = cap.read()
    if hasFrames:
        cv2.imwrite("./data1/frame "+str(sec)+" sec.jpg", image)     # save frame as JPG file
    return hasFrames

# Playing video from file:
cap = cv2.VideoCapture('example.MP4')

try:
    if not os.path.exists('data1'):
        os.makedirs('data1')
except OSError:
    print ('Error: Creating directory of data1')

# currentFrame = 0
# while(True):
#     # Capture frame-by-frame
    
#     ret, frame = cap.read()

    # Saves image of the current frame in jpg file
    
    # name = './data/frame' + str(currentFrame) + '.jpg'
    # print ('Creating...' + name)
    # cv2.imwrite(name, frame)

    # # To stop duplicate images
    # currentFrame += 1

# When everything done, release the capture
# cap.release()
# cv2.destroyAllWindows()
sec = 0
frameRate = 1
#it will capture image in each 0.5 second
success = getFrame(sec)
while success:
    sec = sec + frameRate
    sec = round(sec, 2)
    success = getFrame(sec)
cap.release()
cv2.destroyAllWindows()