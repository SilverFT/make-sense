import {LabelsActionTypes, ImageData, LabelName} from './types';
import {Action} from '../Actions';
import {LabelType} from '../../data/enums/LabelType';

//更新当前图片索引
export function updateActiveImageIndex(activeImageIndex: number): LabelsActionTypes {
    // console.log('updateActiveImageIndex', activeImageIndex);
    
    return {
        type: Action.UPDATE_ACTIVE_IMAGE_INDEX,
        payload: {
            activeImageIndex,
        },
    };
}

//更新当前标签名id
export function updateActiveLabelNameId(activeLabelNameId: string): LabelsActionTypes {
    // console.log('updateActiveLabelNameId', activeLabelNameId);
    
    return {
        type: Action.UPDATE_ACTIVE_LABEL_NAME_ID,
        payload: {
            activeLabelNameId,
        },
    };
}

//更新当前标签id
export function updateActiveLabelId(activeLabelId: string): LabelsActionTypes {
    // console.log('updateActiveLabelId', activeLabelId);
    
    return {
        type: Action.UPDATE_ACTIVE_LABEL_ID,
        payload: {
            activeLabelId,
        },
    };
}

//更新当前高亮标签id
export function updateHighlightedLabelId(highlightedLabelId: string): LabelsActionTypes {
    // console.log('updateHighlightedLabelId', highlightedLabelId);
    
    return {
        type: Action.UPDATE_HIGHLIGHTED_LABEL_ID,
        payload: {
            highlightedLabelId,
        },
    };
}

//更新当前标签类型
export function updateActiveLabelType(activeLabelType: LabelType): LabelsActionTypes {
    // console.log('updateActiveLabelType', activeLabelType);
    
    return {
        type: Action.UPDATE_ACTIVE_LABEL_TYPE,
        payload: {
            activeLabelType,
        },
    };
}

//更新当前图片数据
export function updateImageDataById(id: string, newImageData: ImageData): LabelsActionTypes {
    // console.log('updateImageDataById', id, newImageData);
    
    return {
        type: Action.UPDATE_IMAGE_DATA_BY_ID,
        payload: {
            id,
            newImageData
        },
    };
}

/**
 * 添加图片数据
 * @param imageData 图片数据
 * @returns {LabelsActionTypes} 返回添加图片数据的action
 */
export function addImageData(imageData: ImageData[]): LabelsActionTypes {
    return {
        type: Action.ADD_IMAGES_DATA,
        payload: {
            imageData,
        },
    };
}

//更新图片数据
export function updateImageData(imageData: ImageData[]): LabelsActionTypes {
    // console.log('updateImageData', imageData);
    
    return {
        type: Action.UPDATE_IMAGES_DATA,
        payload: {
            imageData,
        },
    };
}

export function updateLabelNames(labels: LabelName[]): LabelsActionTypes {
    // console.log('updateLabelNames', labels);
    
    return {
        type: Action.UPDATE_LABEL_NAMES,
        payload: {
            labels
        }
    }
}

export function updateFirstLabelCreatedFlag(firstLabelCreatedFlag: boolean): LabelsActionTypes {
    // console.log('updateFirstLabelCreatedFlag', firstLabelCreatedFlag);
    
    return {
        type: Action.UPDATE_FIRST_LABEL_CREATED_FLAG,
        payload: {
            firstLabelCreatedFlag
        }
    }
}
