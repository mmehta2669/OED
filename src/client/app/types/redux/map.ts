/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import {ActionType} from './actions';
import {CalibratedPoint, CartesianPoint, GPSPoint} from '../../utils/calibration';

export enum CalibrationModeTypes {
	initiate = 'initiate',
	calibrate = 'calibrate',
}

export interface MapData{
	name: string;
	note?: string;
	filename?: string;
	modifiedDate?: number;
	origin?: CalibratedPoint;
	opposite?: CalibratedPoint;
	mapSource: string;
}

export interface ChangeMapModeAction {
	type: ActionType.UpdateMapMode;
	nextMode: CalibrationModeTypes;
}

export interface UpdateMapSourceAction {
	type: ActionType.UpdateMapSource;
	image: HTMLImageElement;
}

export interface UpdateCurrentCartesianAction {
	type: ActionType.UpdateCurrentCartesian;
	currentCartesian: CartesianPoint;
}

export interface UpdateCurrentGPSAction {
	type: ActionType.UpdateCurrentGPS;
	currentGPS: GPSPoint;
}

export interface ResetCurrentPointAction {
	type: ActionType.ResetCurrentPoint;
}

export interface AppendCalibrationSetAction {
	type: ActionType.AppendCalibrationSet;
	calibratedPoint: CalibratedPoint;
}

export interface UpdateCalibrationResultAction {
	type: ActionType.UpdateCalibrationResults;
	result: string;
}

export interface DisplayMapLoadingAction {
	type: ActionType.DisplayMapLoading;
}

export interface RequestSelectedMapAction {
	type: ActionType.RequestSelectedMap;
}

export interface ReceiveSelectedMapAction {
	type: ActionType.ReceiveSelectedMap;
	map: MapData
}

export type MapCalibrationAction =
	| ChangeMapModeAction
	| RequestSelectedMapAction
	| ReceiveSelectedMapAction
	| UpdateMapSourceAction
	| UpdateCurrentCartesianAction
	| UpdateCurrentGPSAction
	| ResetCurrentPointAction
	| AppendCalibrationSetAction
	| UpdateCalibrationResultAction
	| DisplayMapLoadingAction;

export interface MapCalibrationState {
	mode: CalibrationModeTypes;
	isLoading: boolean;
	image: HTMLImageElement;
	currentPoint: CalibratedPoint;
	calibrationSet: CalibratedPoint[];
	result: string;
}
