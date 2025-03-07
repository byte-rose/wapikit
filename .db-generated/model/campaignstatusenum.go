//
// Code generated by go-jet DO NOT EDIT.
//
// WARNING: Changes to this file may cause incorrect behavior
// and will be lost if the code is regenerated
//

package model

import "errors"

type CampaignStatusEnum string

const (
	CampaignStatusEnum_Draft     CampaignStatusEnum = "Draft"
	CampaignStatusEnum_Running   CampaignStatusEnum = "Running"
	CampaignStatusEnum_Finished  CampaignStatusEnum = "Finished"
	CampaignStatusEnum_Paused    CampaignStatusEnum = "Paused"
	CampaignStatusEnum_Cancelled CampaignStatusEnum = "Cancelled"
	CampaignStatusEnum_Scheduled CampaignStatusEnum = "Scheduled"
)

func (e *CampaignStatusEnum) Scan(value interface{}) error {
	var enumValue string
	switch val := value.(type) {
	case string:
		enumValue = val
	case []byte:
		enumValue = string(val)
	default:
		return errors.New("jet: Invalid scan value for AllTypesEnum enum. Enum value has to be of type string or []byte")
	}

	switch enumValue {
	case "Draft":
		*e = CampaignStatusEnum_Draft
	case "Running":
		*e = CampaignStatusEnum_Running
	case "Finished":
		*e = CampaignStatusEnum_Finished
	case "Paused":
		*e = CampaignStatusEnum_Paused
	case "Cancelled":
		*e = CampaignStatusEnum_Cancelled
	case "Scheduled":
		*e = CampaignStatusEnum_Scheduled
	default:
		return errors.New("jet: Invalid scan value '" + enumValue + "' for CampaignStatusEnum enum")
	}

	return nil
}

func (e CampaignStatusEnum) String() string {
	return string(e)
}
