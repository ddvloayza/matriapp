import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const region = process.env.AWS_REGION || "us-east-1";

const client = new DynamoDBClient({ region });

export const dynamo = DynamoDBDocumentClient.from(client, {
  marshallOptions: {
    removeUndefinedValues: true
  }
});

export const guestsTableName = process.env.DYNAMODB_GUESTS_TABLE || "";

export type WeddingGuest = {
  dni: string;
  fullName: string;
  maxGuests?: number;
  phone?: string;
  status?: "pending" | "confirmed" | "declined";
  attendance?: "yes" | "no";
  guestsCount?: number;
  companions?: string;
  message?: string;
  updatedAt?: string;
};
