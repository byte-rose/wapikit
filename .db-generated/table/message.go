//
// Code generated by go-jet DO NOT EDIT.
//
// WARNING: Changes to this file may cause incorrect behavior
// and will be lost if the code is regenerated
//

package table

import (
	"github.com/go-jet/jet/v2/postgres"
)

var Message = newMessageTable("public", "Message", "")

type messageTable struct {
	postgres.Table

	// Columns
	UniqueId        postgres.ColumnString
	CreatedAt       postgres.ColumnTimestampz
	UpdatedAt       postgres.ColumnTimestampz
	ConversationId  postgres.ColumnString
	CampaignId      postgres.ColumnString
	ContactId       postgres.ColumnString
	PhoneNumberUsed postgres.ColumnString
	Direction       postgres.ColumnString
	Content         postgres.ColumnString
	OrganizationId  postgres.ColumnString
	Status          postgres.ColumnString

	AllColumns     postgres.ColumnList
	MutableColumns postgres.ColumnList
}

type MessageTable struct {
	messageTable

	EXCLUDED messageTable
}

// AS creates new MessageTable with assigned alias
func (a MessageTable) AS(alias string) *MessageTable {
	return newMessageTable(a.SchemaName(), a.TableName(), alias)
}

// Schema creates new MessageTable with assigned schema name
func (a MessageTable) FromSchema(schemaName string) *MessageTable {
	return newMessageTable(schemaName, a.TableName(), a.Alias())
}

// WithPrefix creates new MessageTable with assigned table prefix
func (a MessageTable) WithPrefix(prefix string) *MessageTable {
	return newMessageTable(a.SchemaName(), prefix+a.TableName(), a.TableName())
}

// WithSuffix creates new MessageTable with assigned table suffix
func (a MessageTable) WithSuffix(suffix string) *MessageTable {
	return newMessageTable(a.SchemaName(), a.TableName()+suffix, a.TableName())
}

func newMessageTable(schemaName, tableName, alias string) *MessageTable {
	return &MessageTable{
		messageTable: newMessageTableImpl(schemaName, tableName, alias),
		EXCLUDED:     newMessageTableImpl("", "excluded", ""),
	}
}

func newMessageTableImpl(schemaName, tableName, alias string) messageTable {
	var (
		UniqueIdColumn        = postgres.StringColumn("UniqueId")
		CreatedAtColumn       = postgres.TimestampzColumn("CreatedAt")
		UpdatedAtColumn       = postgres.TimestampzColumn("UpdatedAt")
		ConversationIdColumn  = postgres.StringColumn("ConversationId")
		CampaignIdColumn      = postgres.StringColumn("CampaignId")
		ContactIdColumn       = postgres.StringColumn("ContactId")
		PhoneNumberUsedColumn = postgres.StringColumn("PhoneNumberUsed")
		DirectionColumn       = postgres.StringColumn("Direction")
		ContentColumn         = postgres.StringColumn("Content")
		OrganizationIdColumn  = postgres.StringColumn("OrganizationId")
		StatusColumn          = postgres.StringColumn("Status")
		allColumns            = postgres.ColumnList{UniqueIdColumn, CreatedAtColumn, UpdatedAtColumn, ConversationIdColumn, CampaignIdColumn, ContactIdColumn, PhoneNumberUsedColumn, DirectionColumn, ContentColumn, OrganizationIdColumn, StatusColumn}
		mutableColumns        = postgres.ColumnList{CreatedAtColumn, UpdatedAtColumn, ConversationIdColumn, CampaignIdColumn, ContactIdColumn, PhoneNumberUsedColumn, DirectionColumn, ContentColumn, OrganizationIdColumn, StatusColumn}
	)

	return messageTable{
		Table: postgres.NewTable(schemaName, tableName, alias, allColumns...),

		//Columns
		UniqueId:        UniqueIdColumn,
		CreatedAt:       CreatedAtColumn,
		UpdatedAt:       UpdatedAtColumn,
		ConversationId:  ConversationIdColumn,
		CampaignId:      CampaignIdColumn,
		ContactId:       ContactIdColumn,
		PhoneNumberUsed: PhoneNumberUsedColumn,
		Direction:       DirectionColumn,
		Content:         ContentColumn,
		OrganizationId:  OrganizationIdColumn,
		Status:          StatusColumn,

		AllColumns:     allColumns,
		MutableColumns: mutableColumns,
	}
}
