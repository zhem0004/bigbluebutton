package org.bigbluebutton.core.api

import org.bigbluebutton.core.domain.{ BreakoutUser, BreakoutVoiceUser }
import spray.json.JsObject
case class InMessageHeader(name: String)
case class InHeaderAndJsonPayload(header: InMessageHeader, payload: JsObject)
case class MessageProcessException(message: String) extends Exception(message)

trait InMessage

//////////////////////////////////////////////////////////////////////////////
// System
/////////////////////////////////////////////////////////////////////////////

case class IsMeetingActorAliveMessage(meetingId: String) extends InMessage

//////////////////////////////////////////////////////////////////////////////
// Internal Messages
/////////////////////////////////////////////////////////////////////////////

case class MonitorNumberOfUsersInternalMsg(meetingID: String) extends InMessage

/**
 * Audit message sent to meeting to trigger updating clients of meeting time remaining.
 * @param meetingId
 */
case class SendTimeRemainingAuditInternalMsg(meetingId: String, timeUpdatedInMinutes: Int) extends InMessage

/**
 * Parent message sent to breakout rooms to trigger updating clients of meeting time remaining.
 * @param meetingId
 * @param timeLeftInSec
 */
case class SendBreakoutTimeRemainingInternalMsg(meetingId: String, timeLeftInSec: Long, timeUpdatedInMinutes: Int) extends InMessage

case class SendRecordingTimerInternalMsg(meetingId: String) extends InMessage

case class ExtendMeetingDuration(meetingId: String, userId: String) extends InMessage
case class DestroyMeetingInternalMsg(meetingId: String) extends InMessage

/**
 * Sent by breakout room to parent meeting the breakout had ended.
 * @param meetingId
 */
case class BreakoutRoomEndedInternalMsg(meetingId: String) extends InMessage

/**
 * Sent by breakout room to parent meeting that breakout room has been created.
 * @param parentId
 * @param breakoutId
 */
case class BreakoutRoomCreatedInternalMsg(parentId: String, breakoutId: String) extends InMessage

/**
 * Audit message to trigger breakout room to update parent meeting of list of users.
 * @param parentId
 * @param breakoutId
 */
case class SendBreakoutUsersAuditInternalMsg(parentId: String, breakoutId: String) extends InMessage

/**
 * Send by breakout room to parent meeting with list of users in breakout room.
 * @param parentId
 * @param breakoutId
 * @param users
 */
case class BreakoutRoomUsersUpdateInternalMsg(parentId: String, breakoutId: String,
                                              users:      Vector[BreakoutUser],
                                              voiceUsers: Vector[BreakoutVoiceUser]) extends InMessage

/**
 * Sent by parent meeting to breakout room to end breakout room.
 * @param parentId
 * @param breakoutId
 */
case class EndBreakoutRoomInternalMsg(parentId: String, breakoutId: String, reason: String) extends InMessage

/**
 * Sent by parent meeting to breakout room to update time.
 * @param parentId
 * @param breakoutId
 * @param durationInSeconds
 */
case class UpdateBreakoutRoomTimeInternalMsg(parentId: String, breakoutId: String, durationInSeconds: Int) extends InMessage

/**
 * Sent by parent meeting to breakout room to extend time.
 * @param parentId
 * @param breakoutId
 * @param senderName
 * @param msg
 */
case class SendMessageToBreakoutRoomInternalMsg(parentId: String, breakoutId: String, senderName: String, msg: String) extends InMessage

// DeskShare
case class DeskShareStartedRequest(conferenceName: String, callerId: String, callerIdName: String) extends InMessage
case class DeskShareStoppedRequest(conferenceName: String, callerId: String, callerIdName: String) extends InMessage
case class DeskShareRTMPBroadcastStartedRequest(conferenceName: String, streamname: String, videoWidth: Int, videoHeight: Int, timestamp: String) extends InMessage
case class DeskShareRTMPBroadcastStoppedRequest(conferenceName: String, streamname: String, videoWidth: Int, videoHeight: Int, timestamp: String) extends InMessage
case class DeskShareGetDeskShareInfoRequest(conferenceName: String, requesterID: String, replyTo: String) extends InMessage
